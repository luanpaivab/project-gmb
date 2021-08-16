exports.up = function (knex, Promise) {
  return knex.schema.createTable("auto_entrega", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_ocorrencia");
    table.string("natureza_ocorrencia");
    table.uuid("matricula");
    table.string("condutor");
    table.uuid("funcao_condutor");
    table.string("conduzido");
    table.uuid("doc_conduzido");
    table.string("recebedor");
    table.string("doc_recebedor");
    table.string("funcao_recebedor");
    table.string("lotacao_recebedor");
    table.string("testemunha1");
    table.string("doc_testemunha1");
    table.string("testemunha2");
    table.string("doc_testemunha2");
    table.string("integrid_conduzido");
    table.string("ass_condutor");
    table.string("ass_recebedor");
    table.string("ass_testemunha1");
    table.string("ass_testemunha2");
    table.text("relato");
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
  return knex.schema.dropTable("auto_entrega");
};
