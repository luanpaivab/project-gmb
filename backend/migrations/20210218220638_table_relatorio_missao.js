exports.up = function (knex, Promise) {
  return knex.schema.createTable("relatorio_missao", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sistema");
    table.date("dt_ocorrencia");
    table.time("hr_entrada");
    table.time("hr_saida");
    table.text("tipo_missao");
    table.string("orgao_responsavel");
    table.string("comandante");
    table.string("matricula_comandate");
    table.string("guarnicao");
    table.string("gm_part1");
    table.string("gm_part2");
    table.string("gm_part3");
    table.string("gm_part4");
    table.text("orgaos_participantes");
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
    table.integer("id_asscomandante").unsigned();
    table.foreign("id_asscomandante").references("id").inTable("users");
    table.integer("id_user_register").unsigned();
    table.foreign("id_user_register").references("id").inTable("users");
    table.integer("id_administrativo").unsigned();
    table.foreign("id_administrativo").references("id").inTable("users");
    table.uuid("state").defaultTo("");
    table.text("state_description").defaultTo("");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("relatorio_missao");
};
