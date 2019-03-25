const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'admin', password: bcrypt.hashSync('admin', saltRounds), id_user_group: 1}
      ]);
    });
};
