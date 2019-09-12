const calculations = require('../calculations');
const families = require('../families');
const babysitter = require('../babysitter');
const chai = require('chai');
const assert = chai.assert;
//mock-stdin will allow testing of user inputs
const stdin = require('mock-stdin').stdin();

// describe('BabySat CL', () => {
//   it('Should exist', () => {
//     assert.isDefined(main.babySat, 'babySat is defined');
//   });
// })

describe('babySit', () => {
  it('Should exist', () => {
    assert.isDefined(babysitter.babysit, 'babysit is defined');
  });
  it('It should update the store.family value with the user input if (A, B, or C)', () => {
    process.nextTick(function mockResponse() {
      stdin.send('A');
    });
    assert.equal(babysitter.store.family, 'A');
  });
})