var riot = require('riot')
var route = require('riot-route')
require('../tags/welcome.tag')
require('../tags/main.tag')

route('/', function() {
  riot.mount('body div', 'welcome', {title: 'Express'})
})

route('/main', function() {
  riot.mount('body div', 'main', {message: 'browser'})
})

route.base('/')
route.start(true)
