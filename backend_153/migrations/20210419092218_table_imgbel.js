exports.up = function (knex, Promise) {
    return knex.schema.createTable("imgbel153", (table) => {
      table.increments("id").primary();
      table.string("originalname");
      table.string("destination");
      table.string("filename");
      table.string("path");
      table.string("size"); 
      table.string("key");
      table.string("fieldname");
      table.string("location");
      table.string("acl");
      table.string("bucket");
      table.string("contentDisposition");
      table.string("contentType");
      table.string("encoding");
      table.string("mimetype");
      table.string("metadata");
      table.string("serverSideEncryption");
      table.string("etag");
      table.string("storageClass");
      table.string("versionId");
      table.integer("id_user_register");
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable("imgbel153");
  };