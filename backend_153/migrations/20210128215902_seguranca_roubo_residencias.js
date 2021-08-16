exports.up = function (knex, Promise) {
    return knex.schema.createTable("roubo_residencia", (table) => {
      table.increments("id").primary();
      table.datetime("data_hora_sistema");
      table.date("data_ocorrencia");
      table.uuid("hora_ocorrencia");
      table.text("relato");
      table.uuid("classificacao_racial");
      table.uuid("classificacao_genero");
      table.uuid("tipo_armamento");
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
    return knex.schema.dropTable("roubo_residencia");
  };