exports.up = function (knex, Promise) {
  return knex.schema.createTable("auto_apreensao", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema").defaultTo(knex.fn.now(0));
    table.date("dt_ocorrencia");
    table.string("produto");
    table.string("condutor");
    table.string("matricula");
    table.string("funcao_condutor");
    table.string("recebedor");
    table.string("funcao_recebedor");
    table.string("lotacao_recebedor");
    table.string("doc_recebedor");
    table.string("ass_condutor");
    table.string("ass_recebedor");
    table.string("coordenador");
    table.string("inspetoria ");
    table.string("superior_servico");
    table.string("id_foto");
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
  return knex.schema.dropTable("auto_apreensao");
};
