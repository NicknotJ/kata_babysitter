const calculations = require('./calculations');
class Family {
  constructor(name, timeSpan){
    this.name = name;
    //timeSpan is an array of objects that represent the starting/ending, payrate, and hourly/set for the timespans
    this.timeSpan = timeSpan;
    this.numberOfTimeSpans = timeSpan.length;
  }

  calculatePay(hours, rate){
    return hours * rate;
  }
  totalAmount(startNumber, startTime, endNumber, endTime){
    let hours = calculations.userSitHours(startNumber, startTime, endNumber, endTime);
    return this.calculatePay(hours, this.timeSpan[0].rate);
  }
}
//startNumber, startTime, endNumber, endTime
const familyA = new Family('A', [{startNumber: 5, startTime: 'pm', endNumber: '10', endTime: 'pm', rate: 15, hourly: true}, {startNumber: 10, startTime: 'pm', endNumber: '4', endTime: 'am', rate: 20, hourly: false}]);
//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night


module.exports = {
  familyA
}