riot.route('/', function() {
    riot.mount('body div', 'welcome', {title: 'Express'})
})
riot.route('/main', function() {
    riot.mount('body div', 'main', {message: 'browser'})
})

riot.route.base('/')
riot.route.start(true)
