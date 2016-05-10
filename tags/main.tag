<main>
  <h1>Main page</h1>
  <p>{opts.message}</p>

  <li each="{result in this.results}">{result.full_name}</li>

  <button onclick="{back}">Back</button>

  <style scoped>
    :scope { display: block; }

    h1 {
        font-style: italic;
    }

    p {
        color: blue;
    }
  </style>

  <script>
    var route = require('riot-route')
    require('es6-promise').polyfill()
    require('isomorphic-fetch')

    this.results = opts.results

    back() {
      route('/');
    }

    this.on('mount', function() {
      // right after the tag is mounted on the page
      if (process.browser) {
        fetch('https://api.github.com/users/octocat/repos')
          .then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then(function(repos) {
            this.results = repos
            this.update()
          }.bind(this));
      }
    })

    this.on('*', function(eventName) {
      //console.log('isBrowser:' + (process.browser == true ? 'yes' : 'no'));
      console.info(eventName)
    })
  </script>
</main>
