exports.up = function (knex, Promise) {
    return knex.schema.createTable("imgs", (table) => {
      table.increments("id").primary();
      table.string("fieldname");
      table.string("originalname");
      table.string("encoding");
      table.string("mimetype");
      table.string("destination");
      table.string("filename");
      table.string("path");
      table.string("size");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("id").inTable("users");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("imgs");
  };