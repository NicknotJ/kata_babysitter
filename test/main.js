const calculations = require('../calculations');
const families = require('../families');
const main = require('../babysitter');
const chai = require('chai');
const assert = chai.assert;

describe('Main function', () => {
  it('Should exist', () => {
    assert.isDefined(main.main, 'main is defined');
  })
})