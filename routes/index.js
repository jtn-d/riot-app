var express = require('express');
var riot = require('riot');
var welcome = require('../app/tags/welcome.tag');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var tag = riot.render(welcome, {title: 'Express'});
  res.render('index', {tagContent: tag});
});

module.exports = router;
