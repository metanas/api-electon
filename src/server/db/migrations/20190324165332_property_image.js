exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(
      `CREATE TABLE property_image (
        id serial PRIMARY KEY,
        name character varying(30),
        id_property integer REFERENCES property
      );`
    )
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('property_image')
};
