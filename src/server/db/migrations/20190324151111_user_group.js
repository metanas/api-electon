exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
     CREATE TABLE user_group (
      id serial PRIMARY KEY,
      name character varying(32),
      permission json
     );
    `)
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_group')
};
