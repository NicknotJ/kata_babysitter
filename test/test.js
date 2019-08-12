const calculations = require('../calculations');
const chai = require('chai');
const assert = chai.assert;

describe('UserInput', () => {
  it('Should return the inputted number', () => {
    assert.equal(calculations.userSitHours(1), 1);
  });
  it('Should return any positive number', () => {
    assert.equal(calculations.userSitHours(5), 5);
    assert.equal(calculations.userSitHours(2), 2);
  });
  it('Should return negative 1 for any negative number', () => {
    assert.equal(calculations.userSitHours(-2), -1);
  });
})