require('dotenv').config();

const port = 3011;
const express = require("express");
const app = require("express")();
const consign = require("consign");
const {knex, knex2} = require("./config/db");

app.dbPop = knex;
app.db = knex2;

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.use('/img153', express.static(__dirname + "/temp/gbel153"));
app.use('/assinaturas', express.static(__dirname + "/temp/assinaturas"));

app.listen(port, () => {
  console.log(`Backend executando na porta ${port}...`);
});
