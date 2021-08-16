exports.up = function (knex, Promise) {
    return knex.schema.createTable("almoxarifado", (table) => {
      table.increments("id").primary();
     // table.datetime("dth_sistema").defaultTo(knex.fn.now(0));
      table.string("produto");
      table.integer("quantidade");
    //   table.integer("user_id").unsigned();
    //   table.foreign("user_id").references("id").inTable("users");
    //   table.uuid("state").defaultTo("");
    //   table.text("state_description").defaultTo("");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("almoxarifado");
  };
  