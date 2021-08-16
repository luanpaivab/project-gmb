exports.up = function (knex, Promise) {
  return knex.schema.createTable("formulario_ferias", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sist");
    table.date("dt_solicitacao");
    table.string("solicitante");
    table.uuid("matricula");
    table.string("inspetoria");
    table.string("posto_servico");
    table.uuid("opcaoUm");
    table.uuid("opcaoDois");
    table.uuid("opcaoTres");
    table.string("id_asSolicitante");
    table.integer("id_user_register").unsigned();
    table.foreign("id_user_register").references("id").inTable("users");
    table.integer("id_administrativo").unsigned();
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("formulario_ferias");
};
