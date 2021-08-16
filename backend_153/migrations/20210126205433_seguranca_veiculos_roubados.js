exports.up = function (knex, Promise) {
  return knex.schema.createTable("roubo_de_veiculos", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_ocorrencia");
    table.uuid("hr_ocorrencia");
    table.uuid("tipo_veiculo");
    table.uuid("marca_modelo");
    table.uuid("placa_veiculo");
    table.uuid("cor_veiculo");
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
  return knex.schema.dropTable("roubo_de_veiculos");
};
