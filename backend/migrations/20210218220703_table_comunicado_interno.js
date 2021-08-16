exports.up = function (knex, Promise) {
  return knex.schema.createTable("comunicado_interno", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_comunicado");
    table.time("hr_comunicado");
    table.string("condutor");
    table.string("matricula_condutor");
    table.string("funcao_condutor");
    table.string("lotacao");
    table.string("fone_condutor");
    table.string("posto");
    table.text("relato");
    table.string("coordenador");
    table.string("inspetoria");
    table.string("superior_servico");
    table.string("estado");
    table.string("cidade");
    table.string("endereco");
    table.string("bairro");
    table.string("numero");
    table.string("cep");
    table.string("latitude");
    table.string("longitude");
    table.string("localizacao_usuario");
    table.integer("id_asscondutor").unsigned();
    table.foreign("id_asscondutor").references("id").inTable("users");
    table.integer("id_user_register").unsigned();
    table.foreign("id_user_register").references("id").inTable("users");
    table.integer("id_administrativo").unsigned();
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("comunicado_interno");
};
