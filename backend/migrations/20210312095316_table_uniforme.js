exports.up = function (knex, Promise) {
  return knex.schema.createTable("solicitacao_uniforme", (table) => {
    table.increments("id").primary();
    table.datetime("dth_sist");
    table.date("dt_requerimento");
    table.string("servidor");
    table.uuid("matricula");
    table.uuid("placa");
    table.uuid("uniforme_um");
    table.integer("tamanho_unifUm");
    table.uuid("uniforme_dois");
    table.integer("tamanho_unifDois");
    table.uuid("uniforme_tres");
    table.uuid("tamanho_unifTres");
    table.uuid("uniforme_quatro");
    table.integer("tamanho_unifQuatro");
    table.uuid("calcado");
    table.integer("tam_calcado");
    table.uuid("cobertura");
    table.uuid("tam_cobertura");

    table.uuid("fiel");
    table.uuid("cinto_nylon");
    table.uuid("cinto_guarnicao");
    table.uuid("capa_colete");
    table.uuid("coldre");
    table.uuid("porta_algema");
    table.uuid("porta_tonfa");
    table.uuid("meia_social");
    table.uuid("distintivo_deQuepe");
    table.uuid("distintivo_boina_casquete");
    table.uuid("placa_peito");
    table.uuid("brasao_bordado_par");
    table.uuid("luva");
    table.uuid("armadura");
    table.uuid("cotoveleira");
    table.uuid("joelheira");
    table.uuid("protetor_canela");

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
  return knex.schema.dropTable("solicitacao_uniforme");
};



