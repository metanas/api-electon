exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
    CREATE TABLE property (
      id serial PRIMARY KEY,
      number character varying(30),
      floor character varying(40),
      area character varying(20),
      location_price money,
      date_added timestamp without time zone DEFAULT now(),
      id_building integer REFERENCES building,
      id_building_address integer REFERENCES building_address,
      id_type integer REFERENCES "type",
      id_user integer REFERENCES "user"
    );
  `)
  ])
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable('property')
};
