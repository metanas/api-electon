const Router = require('express-promise-router');
const {Pool} = require('pg');

const pool = new Pool({
  user: 'dell',
  host: 'localhost',
  database: 'kary',
  password: 'q',
  port: 5432,
});
const router = Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  await pool.connect();
  const users = await pool.query('SELECT * FROM admin');
  const groups = await pool.query('SELECT * FROM "user_group"');

  res.json({users: JSON.stringify(users.rows), groups: JSON.stringify(groups.rows)});
});

module.exports = router;
