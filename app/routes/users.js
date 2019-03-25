const Router = require('express-promise-router');
const router = Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({test: 'respond with a'});
});

module.exports = router;
