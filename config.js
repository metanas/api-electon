module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000
  },

  orm: {
    db: {
      client: 'postgresql',
      connection: {
        database: 'kary',
        host: 'localhost',
        user: 'dell',
        password: 'q',
        port: 5432
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: 'knex_migrations'
    },
  },

  auth: {
    // 180 days in ms
    tokenLifetime: 365 * 24 * 3600 * 1000
  },
  headers: {
    authToken: 'auth-token'
  }
};
