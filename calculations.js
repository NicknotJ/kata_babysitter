function userSitHours(input){
  if(input < 0){
    return -1;
  }
  return input;
}

function userFamilyInput(input){
  return input;
}


module.exports = {
  userSitHours,
  userFamilyInput
};