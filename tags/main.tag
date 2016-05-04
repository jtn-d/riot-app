<main>
  <h1>Main page</h1>
  <p>{opts.message}</p>

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

    back() {
      route('/');
    }
  </script>
</main>