const chai = require('chai');
const assert = chai.assert;

describe('UserInput', () => {
  it('Should return the inputted number', () => {
    assert.equal(userSitHours(1), 1);
  })
})