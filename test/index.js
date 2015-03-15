var reg = require('../regexp');
var assert = require('assert');

describe('reg', function() {
  it('single quotes', function() {
    assert.ok("''".match(reg.singleQuotes));
    assert.ok("'a'".match(reg.singleQuotes));
    assert.ok("'a\\''".match(reg.singleQuotes));
    assert.ok("'a\\\\'".match(reg.singleQuotes));
    assert.equal("'a\\'".match(reg.singleQuotes), null);
  });

  it('double quotes', function() {
    assert.ok('""'.match(reg.doubleQuotes));
    assert.ok('"a"'.match(reg.doubleQuotes));
    assert.ok('"a\\""'.match(reg.doubleQuotes));
    assert.ok('"a\\\\"'.match(reg.doubleQuotes));
    assert.equal('"a\\"'.match(reg.doubleQuotes), null);
  });

  it('html start tag', function() {
    assert.ok('<div>'.match(reg.htmlStartTag));
    assert.ok('<div id=">">'.match(reg.htmlStartTag));
    assert.equal('<>'.match(reg.htmlStartTag), null);
  });

  it('html end tag', function() {
    assert.ok('</div>'.match(reg.htmlEndTag));
    assert.equal('</>'.match(reg.htmlEndTag), null);
  });

  it('block comment', function() {
    assert.ok('/**/'.match(reg.blockComment));
    assert.ok('/* commnet */'.match(reg.blockComment));
  });

  it('ip', function() {
    assert.ok('10.2.5.240'.match(reg.ip));
    assert.equal('10.260.9.3'.match(reg.ip), null);
  });
});