riot.tag2('main', '<h1>Main page</h1> <p>{opts.message}</p> <button onclick="{back}">Back</button>', '', '', function(opts) {
		this.back = function() {
			riot.route('/');
		}.bind(this)
});
riot.tag2('welcome', '<h1>Welcome to {opts.title}</h1> <a href="/main">Main</a>', '', '', function(opts) {
});
