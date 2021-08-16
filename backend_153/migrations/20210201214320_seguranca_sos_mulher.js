exports.up = function (knex, Promise) {
    return knex.schema.createTable("sos_mulher", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_ocorrencia");
    table.uuid("hr_ocorrencia");
    table.string("relato");
    table.string("tipo_agressao");
    table.uuid("classif_racial");
    table.uuid("causador_agressao");
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
    table.integer("id_user_mulher");
  });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("sos_mulher");
  };