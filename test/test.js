const calculations = require('../calculations');
const chai = require('chai');
const assert = chai.assert;

describe('UserHoursInput', () => {
  it('Should return the inputted number', () => {
    assert.equal(calculations.userSitHours(1), 1);
  });
  it('Should return any positive number', () => {
    assert.equal(calculations.userSitHours(5), 5);
    assert.equal(calculations.userSitHours(2), 2);
  });
  it('Should return negative 1 for any negative number', () => {
    assert.equal(calculations.userSitHours(-2), -1);
    assert.equal(calculations.userSitHours(-1), -1);
    assert.equal(calculations.userSitHours(-.5), -1);
  });
});

//please note: letter in this case refers only to the 26 letters of the English alphabet
describe('UserFamilyInput', () => {
  it('Should return the inputted letter', () => {
    assert.equal(calculations.userSitFamily('A'), 'A');
    assert.equal(calculations.userSitFamily('B'), 'B');
    assert.equal(calculations.userSitFamily('C'), 'C');
  });
  it('Should return Z if the input is not a letter', () => {
    assert.equal(calculations.userSitFamily(3), 'Z');
    assert.equal(calculations.userSitFamily('&'), 'Z');
  });
  it('Should return Y if the input is not A/a, B/b, or C/c', () => {
    assert.equal(calculations.userSitFamily('D'), 'Y');
    assert.equal(calculations.userSitFamily('d'), 'Y');
  });
});

describe('CalculatePay', () => {
  it('should multiply the hourly input by the rate', () => {
    assert.equal(calculations.calculatePay(3, 12), 36);
    assert.equal(calculations.calculatePay(1, 20), 20);
    assert.equal(calculations.calculatePay(0, 10), 0);
  })
})

