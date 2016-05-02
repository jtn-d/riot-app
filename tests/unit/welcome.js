var riot = require('riot')

describe('<welcome>', function() {
  var tag, title, link
  var opts = {title: 'Testing'}

  beforeEach(function() {
    var html = document.createElement('welcome')
    document.createElement('welcome')
    document.body.appendChild(html)

    tag = riot.mount('welcome', opts)[0]
    title = document.querySelector('h1')
    link = document.querySelector('a')
  })

  afterEach(function() {
    tag.unmount()
  });

  it('should be ok', function() {
    expect(tag).to.be.ok
    expect(tag.isMounted).to.be.true
  })

  it('should have title', function() {
    expect(title.textContent).to.be.equal('Welcome to ' + opts.title)
  })
})
