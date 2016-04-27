var fs = require('fs');
var chai = require('chai');
var expect = chai.expect;

describe('loaded', function() {

  it('should have title when loaded', function() {
    return browser
      .url('/')
      .getTitle(function(value) {
        expect(value).to.be.equal('riot-app');
      });
  });
});
