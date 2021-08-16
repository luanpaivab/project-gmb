exports.up = function (knex, Promise) {
  return knex.schema.createTable('categories', table => {
    table.increments('id').primary();
    table.string('name');
    table.integer('parentId');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('categories');
};