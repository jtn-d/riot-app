var express = require('express');
var riot = require('riot');
var main = require('../tags/main.tag');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var tag = riot.render(main, {message: 'server'});
  res.render('index', {view: tag});
});

module.exports = router;
