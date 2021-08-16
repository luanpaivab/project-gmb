exports.up = function (knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('unique_id');
    table.string('nome');
    table.string('email').unique();
    table.string('encrypted_password');
    table.string('salt');
    table.datetime('created_at');
    table.datetime('updated_at');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user');
};