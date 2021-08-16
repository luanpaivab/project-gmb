exports.up = function (knex, Promise) {
    return knex.schema.createTable("outras_solicitacoes", (table) => {
      table.increments('id').primary();
      table.datetime("dth_sist");
      table.date("dt_processo");
      table.uuid("solicitante");
      table.uuid("inspetoria");
      table.uuid("fone");
      table.uuid("posto_servico");
      table.text("relato_solicitacao");
      table.uuid("doc_anexo");
      table.string("id_doc_anexo");
      table.integer("id_user_register").unsigned();
      table.integer("id_administrativo").unsigned();
      table.integer("id_ass_solicitante").unsigned();
      table.foreign("id_ass_solicitante").references("id").inTable("users");
      table.foreign("id_administrativo").references("id").inTable("users");
      table.foreign("id_user_register").references("id").inTable("users");
      table.uuid("state").defaultTo("");
      table.text("state_description").defaultTo("");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("outras_solicitacoes");
  };

