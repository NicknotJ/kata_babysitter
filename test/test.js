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
    assert.equal(calculations.userSitFamily('a'), 'A');
    assert.equal(calculations.userSitFamily('b'), 'B');
    assert.equal(calculations.userSitFamily('c'), 'C');
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

describe('convertTime', () => {
  it('Should be defined', () => {
    assert.isDefined(calculations.convertTime, 'convertTime is defined');
  });
  it('Should return -1 if the input is outside our time range (5pm-4am)', () => {
    assert.equal(calculations.convertTime(4, 'pm'), -1);
    assert.equal(calculations.convertTime(12, 'pm'), -1);
    assert.equal(calculations.convertTime(5, 'am'), -1);
  })
  it('Should take a number and time (am/pm) and return a number', () => {
    assert.equal(calculations.convertTime(5, 'pm'), 0);
    assert.equal(calculations.convertTime(11, 'pm'), 6);
    assert.equal(calculations.convertTime(12, 'am'), 7);
    assert.equal(calculations.convertTime(4, 'am'), 11);
  });
})

describe('Family', () => {
  it('Should be defined.', () => {
    assert.isDefined(families.families['A'], 'families[A] has been defined');
  });
  it('Should return correct pay for hours + rate', () => {
    assert.equal(families.families['A'].calculatePay(2, 15), 30);
    assert.equal(families.families['A'].calculatePay(4, 20), 80);
  });
  it('Should have an array for the time spans with start and end times', () => {
    assert.isDefined(families.families['A'].timeSpan, 'timeSpan has been defined');
    assert.isDefined(families.families['A'].timeSpan[0].startNumber, 'startNumber is defined');
    assert.isDefined(families.families['A'].timeSpan[0].startTime, 'startTime is defined');
    assert.isDefined(families.families['A'].timeSpan[0].endNumber, 'endNumber is defined');
    assert.isDefined(families.families['A'].timeSpan[0].endTime, 'endTime is defined');
  });
  it('The timeSpan arrays should include a cost', () => {
    assert.isDefined(families.families['A'].timeSpan[0].rate, 'rate has been defined');
    assert.isDefined(families.families['A'].timeSpan[1].rate, 'rate has been defined');
  });
  it('Should have timeSpan arrays with a boolean value for hourly', () => {
    assert.isDefined(families.families['A'].timeSpan[0].hourly, 'hourly has been defined');
  });
  it('Should have a number value for the number of timeSpans for the family', () => {
    assert.isDefined(families.families['A'].numberOfTimeSpans, 'numberOfTimeSpans has been defined');
    assert.equal(families.families['A'].numberOfTimeSpans, 2);
    assert.isDefined(families.families['B'].numberOfTimeSpans, 'numberOfTimeSpans has been defined');
    assert.equal(families.families['B'].numberOfTimeSpans, 3);
  });
  it('has a method: totalAmount which should calculate the totalAmount earned', () => {
    assert.isDefined(families.families['A'].totalAmount, 'totalAmount has been defined');
    //Using the amounts given in the timeSpan, totalAmount should return the correct amount earned
    assert.equal(families.families['A'].totalAmount(5, "pm", 4, "am"), 110);
    assert.equal(families.families['A'].totalAmount(12, "am", 4, "am"), 20);
  });
    //testing for families['B'], the only default family with more than two timespans
  it('has a method for families[B]: totalAmount which should calculate the totalAmount earned', () => {
    assert.isDefined(families.families['B'].totalAmount, 'totalAmount has been defined');
    assert.equal(families.families['B'].totalAmount(5, 'pm', 4, "am"), 92);
    assert.equal(families.families['B'].totalAmount(12, 'am', 4, 'am'), 16);
    assert.equal(families.families['B'].totalAmount(11, 'pm', 3, 'am'), 24);
  });
  it('has a method for families[C]: totalAmount which should calculate the totalAmount earned', () => {
    assert.isDefined(families.families['C'].totalAmount, 'totalAmount has been defined');
    assert.equal(families.families['C'].totalAmount(5, 'pm', 4, 'am'), 99);
    assert.equal(families.families['C'].totalAmount(5, 'pm', 8, 'pm'), 63);
    assert.equal(families.families['C'].totalAmount(10, 'pm', 12, 'am'), 15);
  });
  it('has a method: totalAmount which returns -1 if the times given are impossible', () => {
    assert.equal(families.families['A'].totalAmount(5, "am", 4, "am"), -1);
    assert.equal(families.families['A'].totalAmount(4, "pm", 4, "am"), -1);
    assert.equal(families.families['A'].totalAmount(12, "pm", 4, "am"), -1);
    assert.equal(families.families['B'].totalAmount(5, "am", 4, "am"), -1);
    assert.equal(families.families['B'].totalAmount(4, "pm", 4, "am"), -1);
    assert.equal(families.families['B'].totalAmount(12, "pm", 4, "am"), -1);
    assert.equal(families.families['C'].totalAmount(5, "am", 4, "am"), -1);
    assert.equal(families.families['C'].totalAmount(4, "pm", 4, "am"), -1);
    assert.equal(families.families['C'].totalAmount(12, "pm", 4, "am"), -1);
  });
})