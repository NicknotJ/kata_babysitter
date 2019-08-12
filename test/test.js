const calculations = require('../calculations');
const chai = require('chai');
const assert = chai.assert;

describe('UserInput', () => {
  it('Should return the inputted number', () => {
    assert.equal(calculations.userSitHours(1), 1);
  })
})