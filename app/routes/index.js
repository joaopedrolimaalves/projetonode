var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express2' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro');
});

module.exports = router;
