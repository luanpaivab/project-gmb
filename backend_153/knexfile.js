// Update with your config settings.
/*
  10.91.13.102
  fcgc29_275gmb*
*/
module.exports = {
  client: "mysql",
  connection: {
    database: "gbelpa153",
    user: "root",
    host: "127.0.0.1",
    password: "",
    timezone: "-03:00",
    dateStrings: true
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
