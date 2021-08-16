exports.up = function (knex, Promise) {
  return knex.schema.createTable("troca_servico", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sist").defaultTo(knex.fn.now(0));
    table.date("dt_solicitacao");
    table.uuid("inspetor");
    table.uuid("nome_solicitante");
    table.uuid("posto_solicitante");
    table.uuid("fone_solicitante");
    table.uuid("nome_solicitado");
    table.uuid("posto_solicitado");
    table.uuid("fone_solicitado");
    table.date("dia_ser_trocadoUm");
    table.time("hr_serv_serTrocadoUm");
    table.date("dia_solicitadoUm");
    table.time("hr_serv_solicitadoUm");
    table.date("dia_ser_trocadoDois");
    table.time("hr_serv_serTrocadoDois");
    table.date("dia_solicitadoDois");
    table.time("hr_serv_solicitadoDois");
    table.integer("id_user_register").unsigned();
    table.integer("id_administrativo").unsigned();
    table.integer("id_assin_solicitante").unsigned();
    table.integer("id_assin_solicitado").unsigned();
    table.foreign("id_assin_solicitante").references("id").inTable("users");
    table.foreign("id_assin_solicitado").references("id").inTable("users");
    table.foreign("id_user_register").references("id").inTable("users");
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("troca_servico");
};
