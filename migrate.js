const migrate = require('table/lib/migrate');
const config = require('./config').orm;

migrate(config);
