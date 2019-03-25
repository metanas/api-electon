exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
    CREATE TABLE "user" (
      id serial PRIMARY KEY,
      name varchar(32) NOT NULL,
      password varchar NOT NULL,
      avatar character varying,
      id_user_group integer REFERENCES user_group,
      date_added timestamp without time zone DEFAULT now()
    );
  `)
  ])
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('"user"')
};
