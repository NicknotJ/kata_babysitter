//Input: Start time, End time
//Checks: Is start time before 5 pm? Is end time after 4 am? Is end time before or equal to start time?
function userSitHours(startNumber, startTime, endNumber, endTime){
  //sanity check. For our purposes, can't have an am start time and pm end time.
  // if(startTime === 'am' && endTime === 'pm'){
  //   return -1;
  // }
  // //edge case for 12 pm (12 > 5, but earlier)
  // if(startTime === 'pm' && startNumber === 12){
  //   return -1;
  // }
  // //cannot babysit before 5pm
  // if(startTime === 'pm' && startNumber < 5){
  //   return -1;
  // }
  // //cannot start after 4 am (with special consideration for 12 am)
  // if(startTime === 'am' && (startNumber >= 4 && startNumber !== 12)){
  //   return -1;
  // }
  // //endNumber gets 12 added to it for maths sakes (special consideration for 12am)
  // if(startTime !== endTime && endNumber !== 12){
  //   endNumber += 12;
  // }
  // //SPECIAL CONSIDERATION FOR 12 AM
  // if(startTime === 'am' && startNumber === 12){
  //   startNumber = 0;
  // }
  // //sanity check, can't start after we end
  // if(startNumber > endNumber){
  //   return -1;
  // }
  // return endNumber - startNumber;
  let start = convertTime(startNumber, startTime);
  let end = convertTime(endNumber, endTime);
  if(start === -1 || end === -1 || start > end){
    return -1;
  } else {
    return end - start;
  }
}

function convertTime(number, time){
  if(time === 'pm' && (number < 5 || number === 12)){
    return -1;
  }
  if(time === 'am' && (number > 4 && number !== 12)){
    return -1;
  }
  if(time === 'pm' || number === 12){
    return number - 5;
  }
  if(time === 'am'){
    return number + 7;
  }
}

function userSitFamily(input){
  //idea: ('a' <= x && x <= 'z') || ('A' <= x && x <= 'Z') for filtering numbers?
  let stringInput = String(input);
  if(('a' <= stringInput && stringInput <= 'z') || ('A' <= stringInput && stringInput <= 'Z')){
    if(stringInput.toUpperCase() >= 'A' && stringInput.toUpperCase() <= 'C'){
      return stringInput.toUpperCase();
    } else return 'Y';
  }
  return 'Z';
}

module.exports = {
  convertTime,
  userSitHours,
  userSitFamily
};