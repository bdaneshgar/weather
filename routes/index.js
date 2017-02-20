var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'weather', key: 'AIzaSyBYaJ06_IeXfGFARnlfMl1thp_7fG6H07k' });
});

module.exports = router;
