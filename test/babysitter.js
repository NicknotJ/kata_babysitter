const calculations = require('../calculations');
const families = require('../families');
const main = require('../babysitter');
const chai = require('chai');
const assert = chai.assert;

// describe('BabySat CL', () => {
//   it('Should exist', () => {
//     assert.isDefined(main.babySat, 'babySat is defined');
//   });
// })

describe('babySat', () => {
  it('Should exist', () => {
    assert.isDefined(main.babysit, 'babysit is defined');
  });
})