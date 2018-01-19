'use strict';

var expect = require('chai').expect;
var Counter = require('../lib/Counter');

describe('Test the Counter methods', function () {
  var c = new Counter();

  it('gets an accurate initial output', function () {
    expect(c.getValue()).to.eql(0);
  });

  it('gets an accurate output after incrementing', function () {
    c.increment();
    expect(c.getValue()).to.eql(1);
  });
});
