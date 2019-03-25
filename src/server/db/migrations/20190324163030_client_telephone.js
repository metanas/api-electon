exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE client_telephone (
        id serial PRIMARY KEY,
        name character varying(50),
        value character varying(15),
        id_client integer REFERENCES client
      );
    `)
  ])
};

exports.down = function (knex, Promise) {

};
