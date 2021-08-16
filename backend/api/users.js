const bcrypt = require("bcrypt-nodejs");
const e = require("express");

module.exports = (app) => {
  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const limitStats = 15;

  const get = async (req, res) => {
    try {
      let paramOfConsult = {};
      let { registro, name } = req.query;

      if (registro) paramOfConsult = { id: registro };

      if (name) name = name.trim();
      //tira o espaço em branco, final e começo
      else name = "";

      const page = req.query.page || 1;
      const result = await app
        .db("users")
        .count("id as count")
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("name", "like", `%${name}%`)
        .first();
      const count = parseInt(result.count);
      const usuario = await app
        .db("users")
        .select()
        .where(paramOfConsult) // filtra pelos campos escolhidos
        .where("name", "like", `%${name}%`)
        .limit(limitStats)
        .offset(page * limitStats - limitStats);

      res.json({ data: usuario, count, limitStats });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getById = (req, res) => {
    app
      .db("users")
      .select()
      .table("users")
      .where({ id: req.params.id })
      .first()
      .then((usuario) => {
        res.json({ ...usuario });
      })
      .catch((err) => res.status(500).send(err));
  };

  const save = async (req, res) => {
    try {
      const dados = { ...req.body };

      dados.password = encryptPassword(dados.password);
      delete dados.confirmPassword;
      
      const inserir = await app.db("users").insert(dados);

      res.json({ data: inserir });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const remove = async (req, res) => {
    try {
      const deletado = await app.db("users").where({ id: req.params.id }).del();

      res.json({ data: deletado });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const update = async (req, res) => {
    try {
      const dados = { ...req.body };
      const inserir = await app
        .db("users")
        .where({ id: dados.id })
        .update(dados);

      res.json({ data: inserir });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  return { get, getById, save, remove, update };
};
