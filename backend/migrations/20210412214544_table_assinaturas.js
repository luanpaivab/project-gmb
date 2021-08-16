exports.up = function (knex, Promise) {
    return knex.schema.createTable("assinaturas", (table) => {
      table.increments("id").primary();
      table.string("imagem");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("id").inTable("users");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("assinaturas");
  };
  0