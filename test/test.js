'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('module function test', () => {
  it('should return hello world', () => {
    var result = index.testFunc('hello world');
    expect(result).to.equal('hello world');
  });
});
