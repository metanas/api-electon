exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE society (
        id serial PRIMARY KEY,
        name character varying(50) NOT NULL,
        address character varying(255),
        ice character varying(32),
        image text,
        start integer NOT NULL,
        id_user integer REFERENCES "user",
        date_added timestamp without time zone DEFAULT now()
      );
    `)
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('society')
};
