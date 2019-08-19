const calculations = require('../calculations');
const families = require('../families');
const chai = require('chai');
const assert = chai.assert;

describe('UserHoursInput', () => {
  it('Should return the number of hours between start and end', () => {
    assert.equal(calculations.userSitHours(5, 'pm', 4, 'am'), 11);
    assert.equal(calculations.userSitHours(5, 'pm', 6, 'pm'), 1);
    //edge case testing for 12am
    assert.equal(calculations.userSitHours(12, 'am', 4, 'am'), 4);
    assert.equal(calculations.userSitHours(5, 'pm', 12, 'am'), 7);
  });
  it('Should return -1 if the start time is before 5 pm', () => {
    assert.equal(calculations.userSitHours(4, 'pm', 4, 'am'), -1);
    assert.equal(calculations.userSitHours(12, 'pm', 4, 'am'), -1);
  });
  it('Should return -1 if the start time is after or equal to 4 am', () => {
    assert.equal(calculations.userSitHours(4, 'am', 5, 'am'), -1);
    assert.equal(calculations.userSitHours(11, 'am', 12, 'pm'), -1);
  });
  it('Should return -1 if the start time is after the end time', () => {
    assert.equal(calculations.userSitHours(7, 'pm', 5, 'pm'), -1);
    assert.equal(calculations.userSitHours(12, 'am', 11, 'pm'), -1);
    assert.equal(calculations.userSitHours(3, 'am', 1, 'am'), -1);
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

describe('Family', () => {
  it('Should be defined.', () => {
    assert.isDefined(families.familyA, 'familyA has been defined');
  });
  it('Should return correct pay for hours + rate', () => {
    assert.equal(families.familyA.calculatePay(2, 15), 30);
    assert.equal(families.familyA.calculatePay(4, 20), 80);
  });
  it('Should have an array for the time spans with start and end times', () => {
    assert.isDefined(families.familyA.timeSpan, 'timeSpan has been defined');
    assert.isDefined(families.familyA.timeSpan[0].startNumber, 'startNumber is defined');
    assert.isDefined(families.familyA.timeSpan[0].startTime, 'startTime is defined');
    assert.isDefined(families.familyA.timeSpan[0].endNumber, 'endNumber is defined');
    assert.isDefined(families.familyA.timeSpan[0].endTime, 'endTime is defined');
  });
  it('The timeSpan arrays should include a cost', () => {
    assert.isDefined(families.familyA.timeSpan[0].rate, 'rate has been defined');
    assert.isDefined(families.familyA.timeSpan[1].rate, 'rate has been defined');
  });
  it('Should have timeSpan arrays with a boolean value for hourly', () => {
    assert.isDefined(families.familyA.timeSpan[0].hourly, 'hourly has been defined');
  });
  it('Should have a number value for the number of timeSpans for the family', () => {
    assert.isDefined(families.familyA.numberOfTimeSpans, 'numberOfTimeSpans has been defined');
    assert.equal(families.familyA.numberOfTimeSpans, 2);
    assert.isDefined(families.familyB.numberOfTimeSpans, 'numberOfTimeSpans has been defined');
    assert.equal(families.familyB.numberOfTimeSpans, 3);
  });
  it('has a method: totalAmount which should calculate the totalAmount earned', () => {
    assert.isDefined(families.familyA.totalAmount, 'totalAmount has been defined');
    //Using the amounts given in the timeSpan, totalAmount should return the correct amount earned
    assert.equal(families.familyA.totalAmount(5, "pm", 4, "am"), 110);
    assert.equal(families.familyA.totalAmount(12, "am", 4, "am"), 20);
    //testing for familyB, the only default family with more than two timespans
    assert.isDefined(families.familyB.totalAmount, 'totalAmount has been defined');
    assert.equal(families.familyB.totalAmount(5, "pm", 4, "am"), 92);
    assert.equal(families.familyB.totalAmount(12, "am", 4, "am"), 16); //currently failing. Returning 32!!!
    assert.equal(families.familyB.totalAmount(11, "pm", 4, "am"), 24); //also returning 32...? 
  });
  it('has a method: totalAmount which returns -1 if the times given are impossible', () => {
    assert.equal(families.familyA.totalAmount(5, "am", 4, "am"), -1);
    assert.equal(families.familyA.totalAmount(4, "pm", 4, "am"), -1);
    assert.equal(families.familyA.totalAmount(12, "pm", 4, "am"), -1);
  });
})