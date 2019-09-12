const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const ask = require('../ask');


// describe('Function: ask()', () => {
//   let stdin;
//   beforeEach(() => {
//     console.log('before each ran');
//     stdin = require('mock-stdin').stdin();
//   });
//   it('asks a question and returns the response to be stored as a variable', () => {
//     let answer;
//     console.log('1 ran');
//     process.nextTick(() => {
//       stdin.send('answer');
//       console.log('3 ran');
//     })
//     console.log('4 ran');
//     return ask('test')
//       .then((response) => {
//         console.log(response, '5 ran');
//         console.assert(response === 'answer');
//       });
//   });
// });

// describe('ask', function () {
//   var stdin;
//   beforeEach(function () {
//     stdin = require('mock-stdin').stdin();
//   });
//   it('asks a question', function () {
//     process.nextTick(function mockResponse() {
//       stdin.send('response');
//     });
//     return ask('question: test')
//       .then((response) => {
//         console.assert(response === 'response');
//       });
//   });
// });

describe('ask', () => {
  let stdin;
  beforeEach(() => {
    stdin = require('mock-stdin').stdin();
  });
  it('asks a question', () => {
    return ask('question:test')
    .then(() => {
      expect(console.log.calledOnce).to.be.true;
    })
  })
})