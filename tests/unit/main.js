describe('<welcome>', function() {
  var tag, title, link
  var opts = {title: 'Testing'}

  beforeEach(function() {
    var html = document.createElement('main')
    document.createElement('main')
    document.body.appendChild(html)

    tag = riot.mount('main', opts)[0]
    title = document.querySelector('h1')
    link = document.querySelector('a')

    sinon.spy(riot, 'route')
  })

  afterEach(function() {
    tag.unmount()

    riot.route.restore()
  });

  it('should be ok', function() {
    expect(tag).to.be.ok
    expect(tag.isMounted).to.be.true
  })

  it('should have title', function() {
    expect(title.textContent).to.be.equal('Main page')
  })

  it('should route to root when back is called', function() {
    tag.back();
    expect(riot.route).calledWith('/')
  });
})
