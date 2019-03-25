exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE client (
        id serial PRIMARY KEY,
        name character varying(30),
        type character varying(20),
        identification character varying(30),
        address character varying(100),
        date_added timestamp without time zone DEFAULT now(),
        id_user integer REFERENCES "user"
      );
    `)
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('client')
};
