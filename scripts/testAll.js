var exec = require('child_process').exec;
var selenium = require('selenium-standalone');

selenium.install({
  // check for more recent versions of selenium here:
  // https://selenium-release.storage.googleapis.com/index.html
  version: '2.53.0',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      // check for more recent versions of chrome driver here:
      // https://chromedriver.storage.googleapis.com/index.html
      version: '2.21',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    },
    ie: {
      // check for more recent versions of internet explorer driver here:
      // https://selenium-release.storage.googleapis.com/index.html
      version: '2.53.0',
      arch: process.arch,
      baseURL: 'https://selenium-release.storage.googleapis.com'
    }
  },
  logger: function(message) {
    console.log(message);
  }
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('run test:unit');
    exec('npm run test:unit', function(err, stdout, stderr) {
      if (err) {
        console.log('error' + err);
        process.exit(1);
      } else {
        console.log('test:unit done');
        selenium.start(function(err, child) {
          if (err) {
            console.log(err);
          } else {
            selenium.child = child;
            console.log('run test:e2e');
            exec('npm run test:e2e', function(err, stdout, stderr) {
              if (err) {
                console.log('error' + err);
                process.exit(1);
              } else {
                console.log('test:e2e done');
                console.log(stdout);
                console.log(stderr);
                selenium.child.kill();
              }
            });
          }
        });
      }
    });
  }
});
