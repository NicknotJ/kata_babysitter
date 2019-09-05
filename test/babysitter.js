const calculations = require('../calculations');
const families = require('../families');
const babysitter = require('../babysitter');
const chai = require('chai');
const assert = chai.assert;

// describe('BabySat CL', () => {
//   it('Should exist', () => {
//     assert.isDefined(main.babySat, 'babySat is defined');
//   });
// })

describe('babySat', () => {
  it('Should exist', () => {
    assert.isDefined(babysitter.babysit, 'babysit is defined');
  });
  it('Should question the user about what family they sat for and store response', () => {
    
  })
})