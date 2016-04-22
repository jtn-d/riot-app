var express = require('express');
var riot = require('riot');
var main = require('../public/tags/main.tag');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var tag = riot.render(main, {message: 'server'});
  res.render('index', {tagContent: tag});
});

module.exports = router;
