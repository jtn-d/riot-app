var express = require('express');
var riot = require('riot');
var main = require('../tags/main.tag');
var router = express.Router();
var repos = require('../services/repos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  repos.get('octocat')
    .then(function(repos) {
      var tag = riot.render(main, {message: 'server', results: repos});
      res.render('index', {view: tag});
    }.bind(this))
    .catch(function(error) {
      console.error(error);
    });
});

module.exports = router;
