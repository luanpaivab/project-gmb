exports.up = function (knex, Promise) {
    return knex.schema.createTable("sim", (table) => {
      table.increments('id').primary();
      table.datetime("dth_sistema").defaultTo(knex.fn.now(0));
      table.date("dt_ocorrencia");
      table.time("hr_chamada");
      table.time("hr_ocorrencia");
      table.string("solicitante");
      table.uuid("sexo");
      table.uuid("fone");
      table.string("endereco");
      table.uuid("bairro");
      table.uuid("numero");
      table.uuid("cep");
      table.string("tipo_ocorrencia");
      table.text("descricao");
      table.uuid("encaminhamento");
      table.text("desfecho");
      table.string("origem");
      table.string("superior_servico");
      table.uuid("deslocamento_vtr");
      table.integer("operador").unsigned();
      table.foreign("operador").references("id").inTable("users");
      table.uuid("state").defaultTo("");
      table.text("state_description").defaultTo("");
      
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("sim");
  };

//   id 
// origem
// data
// hora
// operador
// superior
// solicitante
// sexo
// tel
// endereço
// bairro
// tipo de ocorrencia
// descrição
// encamnhamento
// desfecho
// deslocamento de vtr sim/nÃO

/*table.datetime("dth_sistema").defaultTo(knex.fn.now(0));
      table.date("dt_ocorrencia");
      table.time("hr_ocorrencia");
      table.time("hr_chamada");
      table.string("hr_termino");
      table.string("solicit");
      table.string("doc");
      table.string("tel");
      table.string("endereco");
      table.string("estado");
      table.string("cidade");
      table.string("bairro");
      table.string("num");
      table.string("cep");
      table.string("nome_suspeito");
      table.string("classif_racial");
      table.string("classif_genero");
      table.string("faixa_etaria");
      table.string("guarnicao_apoio")
      table.string("superior_serv")
      table.string("encarregado_ocor")
      table.string("encaminhamento")
      table.string("arma_suspeito")
      table.text("historico") */