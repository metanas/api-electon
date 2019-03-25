// Update with your config settings.
const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://dell:q@localhost:5432/kary',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
};
