//Input: Start time, End time
//Checks: Is start time before 5 pm? Is end time after 4 am? Is end time before or equal to start time?
function userSitHours(startNumber, startTime, endNumber, endTime){
  //edge case for 12 pm (12 > 5, but earlier)
  if(startTime === 'pm' && startNumber === 12){
    return -1;
  }
  //cannot babysit before 5pm
  if(startTime === 'pm' && startNumber < 5){
    return -1;
  }
  if(startTime === 'am' && (startNumber >= 4 && startNumber !== 12)){
    return -1;
  }
  if(startTime !== endTime){
    endNumber += 12;
  }
  return endNumber - startNumber;
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

function calculatePay(hours, rate){
  return hours * rate;
}


module.exports = {
  userSitHours,
  userSitFamily,
  calculatePay
};