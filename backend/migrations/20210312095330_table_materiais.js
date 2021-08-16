exports.up = function (knex, Promise) {
  return knex.schema.createTable("requisicao_material", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sist");
    table.date("dt_solicitacao");
    table.string("servidor");
    table.uuid("matricula");
    table.uuid("placa");
    table.uuid("posto");
    table.uuid("inspetoria");
    table.text("descricao");
    table.integer("id_assServidor");
    table.integer("id_user_register").unsigned();
    table.foreign("id_user_register").references("id").inTable("users");
    table.integer("id_administrativo").unsigned();
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("requisicao_material");
};
