function userSitHours(input){
  if(input < 0){
    return -1;
  }
  return input;
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