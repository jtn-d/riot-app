require('es6-promise').polyfill()
require('isomorphic-fetch')

module.exports = {
  get: function(user) {
    return new Promise((resolve, reject) => {
      fetch('https://api.github.com/users/' + user + '/repos')
        .then(function(response) {
          if (response.status !== 200) {
            reject({status: response.status, statusText: response.statusText});
          }
          return response.json();
        }).then(function(repos) {
          resolve(repos);
        }).catch(function(error) {
          reject(error);
        });
    })
  }
}
