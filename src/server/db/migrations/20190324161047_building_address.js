exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
     CREATE TABLE building_address (
        id serial PRIMARY KEY,
        address varchar(128),
        id_building integer REFERENCES building 
     );`
    )
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('building_address')
};
