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
    // let hours = calculations.userSitHours(startNumber, startTime, endNumber, endTime);
    // return this.calculatePay(hours, this.timeSpan[0].rate);

    //sanity check:
    if(calculations.userSitHours(startNumber, startTime, endNumber, endTime) === -1){
      return -1;
    }
    let earned = 0;
    let calcStarted = false;
    for(let x = 0; x < this.timeSpan.length; x++){
      console.log(startNumber, startTime, this.timeSpan[x].endNumber, this.timeSpan[x].endTime);
      let timeSat = calculations.userSitHours(startNumber, startTime, this.timeSpan[x].endNumber, this.timeSpan[x].endTime);
      console.log(timeSat);
      if(timeSat === -1 && calcStarted === false){
        continue;
      }
      if(calcStarted = true){
        //this needs to check which is later, timeSpan[x].endNumber or endNumber and use the earlier of the two. 
        timeSat = calculations.userSitHours(this.timeSpan[x].startNumber, this.timeSpan[x].startTime, this.timeSpan[x].endNumber, this.timeSpan[x].endTime)
      }
      if(this.timeSpan[x].hourly === true){
        earned = earned + this.calculatePay(timeSat, this.timeSpan[x].rate);
      } else {
        earned = earned + this.timeSpan[x].rate;
      }
      calcStarted = true;
      }
      return earned;
  }
}
//startNumber, startTime, endNumber, endTime
const familyA = new Family('A', [{startNumber: 5, startTime: 'pm', endNumber: 11, endTime: 'pm', rate: 15, hourly: true}, {startNumber: 11, startTime: 'pm', endNumber: 4, endTime: 'am', rate: 20, hourly: false}]);
//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
const familyB = new Family('B', [{startNumber: 5, startTime: 'pm', endNumber: 10, endTime: 'pm', rate: 12, hourly: true}, {startNumber: 10, startTime: 'pm', endNumber: 12, endTime: 'am', rate: 8, hourly: true}, {startNumber: 12, startTime: 'am', endNumber: '4', endTime: 'am', rate: 16, hourly: false}]);
//Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night


module.exports = {
  familyA,
  familyB
}