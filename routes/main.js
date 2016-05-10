var express = require('express');
var riot = require('riot');
var main = require('../tags/main.tag');
var router = express.Router();
require('es6-promise').polyfill()
require('isomorphic-fetch')

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('https://api.github.com/users/octocat/repos')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(repos) {
      var tag = riot.render(main, {message: 'server', results: repos});
      res.render('index', {view: tag});
    }.bind(this));
});

module.exports = router;
