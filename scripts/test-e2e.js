var exec = require('child_process').exec;
var selenium = require('selenium-standalone');

selenium.install({
  logger: function(message) {
    console.log(message);
  }
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    selenium.start(function(err, child) {
      if (err) {
        console.log(err);
      } else {
        selenium.child = child;

        exec('wdio tests/e2e/wdio.conf.js', function(err, stdout, stderr) {
          if (err) {
            console.log(err);
          } else {
            console.log(stdout);
            console.log(stderr);
            selenium.child.kill();
          }
        });
      }
    });
  }
});
