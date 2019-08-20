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
    //Sanity check (no reason to do the calculations if the times are impossible)
    if(calculations.userSitHours(startNumber, startTime, endNumber, endTime) === -1){
      return -1;
    }
    let initialStartTime = calculations.convertTime(startNumber, startTime);
    let initialEndTime = calculations.convertTime(endNumber, endTime);
    let earned = 0;
    let calcStarted = false;
    //this will end the loop once we hit the start time in a span
    let endMe = false;
    for(let x = this.timeSpan.length - 1; x >= 0; x--){
      //if the endtime is before timeSpan[x].startNumber then we continue
      let currentSpan = this.timeSpan[x];
      //calculations.convertTime returns a number from 0 (5pm) - 11 (4am). Returns -1 if outside timespan 
      if(initialEndTime < calculations.convertTime(currentSpan.startNumber, currentSpan.startTime)){
        continue;
      }
      let thisEndTime;
      if(calcStarted === false){
        thisEndTime = initialEndTime;
      } else {
        thisEndTime = calculations.convertTime(currentSpan.endNumber, currentSpan.endTime);
      }
      let thisStartTime;
      let spanStartTime = calculations.convertTime(currentSpan.startNumber, currentSpan.startTime);
      if(initialStartTime < spanStartTime){
        thisStartTime = spanStartTime;
      } else {
        thisStartTime = initialStartTime;
        endMe = true;
      }
      let thisHours = thisEndTime - thisStartTime;
      if(currentSpan.hourly){
         earned = earned + this.calculatePay(thisHours, currentSpan.rate)
      } else {
         earned = earned + currentSpan.rate;
      }
      calcStarted = true;
      if(endMe === true){
        break;
      }
    }
    return earned;
  }
}

//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night
const familyA = new Family('A', [{startNumber: 5, startTime: 'pm', endNumber: 11, endTime: 'pm', rate: 15, hourly: true}, {startNumber: 11, startTime: 'pm', endNumber: 4, endTime: 'am', rate: 20, hourly: false}]);
//Family B pays $12 per hour before 10pm, $8 between 10 and 12, and $16 the rest of the night
const familyB = new Family('B', [{startNumber: 5, startTime: 'pm', endNumber: 10, endTime: 'pm', rate: 12, hourly: true}, {startNumber: 10, startTime: 'pm', endNumber: 12, endTime: 'am', rate: 8, hourly: true}, {startNumber: 12, startTime: 'am', endNumber: 4, endTime: 'am', rate: 16, hourly: false}]);
//Family C pays $21 per hour before 9pm and then $15 for the rest of the night
const familyC = new Family('C', [{startNumber: 5, startTime: 'pm', endNumber: 9, endTime: 'pm', rate: 21, hourly: true}, {startNumber: 9, startTime: 'pm', endNumber: 4, endTime: 'am', rate: 15, hourly: false}]);

module.exports = {
  familyA,
  familyB,
  familyC
}