exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE "type" (
        id serial PRIMARY KEY,
        name character varying(150) NOT NULL,
        date_added timestamp without time zone DEFAULT now() NOT NULL,
        id_user integer REFERENCES "user"
      );`
    )
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('"type"')
};
