exports.up = function (knex, Promise) {
  Promise.all([
    knex.schema.raw(`
      CREATE TABLE payment (
        id serial PRIMARY KEY,
        id_contract varchar REFERENCES contract,
        date date,
        price money,
        price_paid money,
        print_date timestamp without time zone,
        paid_date timestamp without time zone,
        mode character varying(40),
        id_printer integer REFERENCES "user",
        id_payer integer REFERENCES "user",
        id_user integer REFERENCES "user",
        date_added timestamp without time zone DEFAULT now()
      );
    `)
  ])
};

exports.down = function (knex, Promise) {
  knex.schema.dropTable('payment')
};
