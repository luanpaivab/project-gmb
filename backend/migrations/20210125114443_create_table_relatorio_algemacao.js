exports.up = function (knex, Promise) {
  return knex.schema.createTable("relatorio_algemacao", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema").defaultTo(knex.fn.now(0));
    table.date("dt_ocorrencia");
    table.string("condutor");
    table.string("matricula_condutor");
    table.string("funcao_condutor");
    table.string("auto_presumivel");
    table.string("doc_autor");
    table.string("justificativa_algemacao");
    table.text("relatorio_ocorrencia");
    table.string("coordenador");
    table.string("inspetoria ");
    table.string("superior_servico");
    table.string("idFoto");
    table.string("id_asscondutor");
    table.integer("ro_Id").unsigned();
    table.foreign("ro_Id").references("id").inTable("registro_ocorrencia");
    table.integer("id_user_register").unsigned();
    table.foreign("id_user_register").references("id").inTable("users");
    table.integer("id_administrativo").unsigned();
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("relatorio_algemacao");
};
