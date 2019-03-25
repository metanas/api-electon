exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE building_telephone (
        id serial PRIMARY KEY,
        name character varying(30),
        value character varying(15),
        id_building integer REFERENCES building 
      );
    `)
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('building_telephone')
  ])
};
