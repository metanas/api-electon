exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE society_telephone (
        id serial Primary Key,
        name character varying(60),
        value character varying(15),
        id_society integer REFERENCES society
      );`
    )
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('society_telephone ')
};
