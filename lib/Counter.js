'use strict';

var Counter = function () {
  this.count = 0;
};

Counter.prototype.increment = function () {
  this.count++;
};

Counter.prototype.getValue = function () {
  return this.count;
};

module.exports = Counter;
