const port = 3005
const express = require("express");
const app = require("express")();
const consign = require("consign");
const knex = require("./config/db");

app.db = knex;

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

app.use('/uploads', express.static(__dirname + "/temp/uploads"));
app.use('/assinaturas', express.static(__dirname + "/temp/assinaturas"));

app.listen(port, () => {
  console.log(`Backend executando na porta ${port}...`);
});
