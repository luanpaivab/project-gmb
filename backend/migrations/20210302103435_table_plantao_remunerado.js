exports.up = function (knex, Promise) {
    return knex.schema.createTable("plantao_remunerado", (table) => {
      table.increments('id').primary();
      table.datetime("dth_sist");
      table.string("solicitante");
      table.uuid("matricula");
      table.uuid("placa");
      table.uuid("inspetoria");
      table.date("dt_opcaoUM");
      table.time("hr_opcaoUM");
      table.uuid("posto_opcaoUM");
      
      table.date("dt_opcaoDois");
      table.time("hr_opcaoDois");
      table.uuid("posto_opcaoDois");
      
      table.date("dt_opcaoTres");
      table.time("hr_opcaoTres");
      table.uuid("posto_opcaoTres");
      
      table.date("dt_opcaoQuarta");
      table.time("hr_opcaoQuarta");
      table.uuid("posto_opcaoQuarta");

      table.date("dt_opcaoQuinta");
      table.time("hr_opcaoQuinta");
      table.uuid("posto_opcaoQuinta");

      table.date("dt_opcaoSexta");
      table.time("hr_opcaoSexta");
      table.uuid("posto_opcaoSexta");

      table.uuid("termo_compromisso");
      table.integer("id_user_register").unsigned();
      table.integer("id_administrativo").unsigned();
      table.integer("id_assSolicitante").unsigned();
      table.foreign("id_administrativo").references("id").inTable("users");
      table.foreign("id_user_register").references("id").inTable("users");
      table.foreign("id_assSolicitante").references("id").inTable("users");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("plantao_remunerado");
  };

