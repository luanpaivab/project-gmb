const bcrypt = require("bcrypt-nodejs");
const e = require("express");

module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const save = async (req, res) => {
    const user = { ...req.body };
    if (req.params.id) user.id = req.params.id;

    if (!req.originalUrl.startsWith("/users")) user.admin = false;
    if (!req.user || !req.user.admin) user.admin = false;

    try {
      existsOrError(user.password, "Senha não preenchida!");

      const userFromDB = await app
        .db("users")
        .where({ email: user.email })
        .first();
      if (!user.id) {
        notExistsOrError(userFromDB, "Usuário já cadastrado!");
      }
    } catch (msg) {
      return res.status(400).send(msg);
    }

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {
      app
        .db("users")
        .update(user)
        .where({ id: user.id })
        .where("deletado", false)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app
        .db("users")
        .insert(user)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const limit = 18; // usado para paginação
  const get = async (req, res) => {
    const page = req.query.page || 1;
    const result = await app.db("users").count("id as count").first();
    const count = parseInt(result.count);
    app.db("users")
      .select()
      .limit(limit)
      .offset(page * limit - limit)
      .where("deletado", false)
      .then((users) => res.json({ data: users, count, limit }))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app
      .db("users")
      .select().table('users')
      .where({ id: req.params.id })
      .where("deletado", false)
      .first()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      const ros = await app.db("ros").where({ userId: req.params.id });
      notExistsOrError(ros, "Usuário possui RO cadastrados !");

      const rowsUpdated = await app
        .db("users")
        .update({ deletado: true })
        .where({ id: req.params.id });
      existsOrError(rowsUpdated, "Usuário não encontrado!");

      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, getById, remove };
};


/*"id",
      "name",
      "email",
      "admin",
      "registroGbel",
      "matricula",
      "turma",
      "nomeFuncional",
      "placaUser",
      "dtAdmis",
      "decAdmiss",
      "diario",
      "sexoUser",
      "estadoCivil",
      "grupamento",
      "postoServ",
      "funcao",
      "fatorRh",
      "nacionalidade",
      "naturalidade",
      "dtNascimento",
      "numPorteArma",
      "validPorteArma",
      "enderecoUser",
      "cidadeUser",
      "bairroUser",
      "cepUser",
      "telUser",
      "numCnh",
      "validCnh",
      "categCnh",
      "cpfUser",
      "rgUser",
      "orgaoRg",
      "dtRg",
      "numTitulo",
      "zonaTitulo",
      "secaoTitulo",
      "numReservista",
      "categServMilitar",
      "nomePaiUser",
      "nomeMaeUser",
      "escolaridadeUser",
      "FormAcademica",
      "profExternaUser",
      "cursosCapacit",
      "ideoReligiosa",
      "telResidencia",
      'userAtivo',
      'userPorte',
      'userReadaptado',
      'userTemporario',
      'readaptadoPara',
      'dtInicoTemporario' */