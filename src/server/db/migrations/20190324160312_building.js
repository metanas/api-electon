exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
    CREATE TABLE building (
      id serial PRIMARY KEY,
      name character varying(60) NOT NULL,
      image text,
      id_type integer REFERENCES "type",
      id_user integer REFERENCES "user",
      id_society integer REFERENCES society,
      date_added timestamp without time zone DEFAULT now()
    );`
    )
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('building')
};
