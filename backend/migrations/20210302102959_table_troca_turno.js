exports.up = function (knex, Promise) {
  return knex.schema.createTable("troca_turno", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sist");
    table.uuid("solicitante");
    table.uuid("inspetoria_solicitante");
    table.uuid("posto_solicitante");
    table.uuid("fone_solicitante");
    table.uuid("solicitado");
    table.uuid("inspetoria_solicitado");
    table.uuid("posto_solicitado");
    table.uuid("fone_solicitado");
    table.uuid("mes_troca");
    table.uuid("turno_solicitante");
    table.uuid("turno_solicitado");
    table.date("data_solicitacao");
    table.string("id_doc_anexo");
    table.integer("id_user_register").unsigned();
    table.integer("id_administrativo").unsigned();
    table.integer("id_ass_solicitante").unsigned();
    table.integer("id_ass_solicitado").unsigned();
    table.foreign("id_ass_solicitante").references("id").inTable("users");
    table.foreign("id_ass_solicitado").references("id").inTable("users");
    table.foreign("id_administrativo").references("id").inTable("users");
    table.foreign("id_user_register").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("troca_turno");
};
