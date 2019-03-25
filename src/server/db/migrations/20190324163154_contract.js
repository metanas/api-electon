exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE contract (
        id varchar PRIMARY KEY,
        id_property integer REFERENCES property,
        id_client integer REFERENCES client,
        date_begin date,
        date_end date,
        advanced_price money,
        tax money,
        advanced_price_return boolean,
        date_added timestamp without time zone DEFAULT now(),
        id_user integer REFERENCES "user"
      );
    `)
  ])
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable('contract')
};
