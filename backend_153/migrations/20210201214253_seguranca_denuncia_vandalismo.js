exports.up = function (knex, Promise) {
  return knex.schema.createTable("vandalismo", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_ocorrencia");
    table.uuid("hr_ocorrencia");
    table.string("tipo_ocorrencia");
    table.uuid("classif_genero");
    table.uuid("classif_racial");
    table.uuid("estado");
    table.uuid("cidade");
    table.uuid("bairro");
    table.string("endereco");
    table.uuid("numero");
    table.uuid("cep");
    table.uuid("latitude");
    table.uuid("longitude");
    table.string("localizacao_usuario");
    table.string("id_foto");
    table.integer("id_user_register");
     });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("vandalismo");
};
