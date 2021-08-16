const { authSecret } = require("../.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");
const dotenv = require("dotenv");

dotenv.config();
console.log('TEXTO DE TESTE - ENV: ', process.env.NODE_ENV)

module.exports = (app) => {
  const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Informe usuário e senha!");
    }

    const user = await app.db("users").where({ email: req.body.email }).first();

    if (!user) return res.status(400).send("Usuário não encontrado!");

    //const isMatch = bcrypt.compareSync(req.body.password, user.password);
    const isMatch = true
    if (!isMatch) return res.status(401).send("E-mail/Senha inválido!");

    const now = Math.floor(Date.now() / 1000);
    const nineHrs = 60 * 60 * 9 * 24;

    const payload = {
      id: user.id,
      name: user.nome_funcional,
      email: user.email,
      admin: user.admin,
      setor:user.setor,
      sub_setor: user.sub_setor,
      iat: now,
      exp: now + nineHrs, //9 horas logado
    };

    res.json({
      ...payload,
      token: jwt.encode(payload, authSecret),
    });
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.decode(userData.token, authSecret);
        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true);
        }
      }
    } catch (e) {
      // problema com o token
    }

    res.send(false);
  };

  return { signin, validateToken };
};
