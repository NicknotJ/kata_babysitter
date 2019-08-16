class Family {
  constructor(name, timeSpan){
    this.name = name;
    this.timeSpan = timeSpan;
  }

  calculatePay(hours, rate){
    return hours * rate;
  }
}
//startNumber, startTime, endNumber, endTime
const familyA = new Family('A', [{startNumber: 5, startTime: 'pm', endNumber: '10', endTime: 'pm', cost: 15}, {startNumber: 10, startTime: 'pm', endNumber: '4', endTime: 'am', cost: 20}]);
//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night


module.exports = {
  familyA
}