function userSitHours(input){
  if(input < 0){
    return -1;
  }
  return input;
}

function userSitFamily(input){
  return input;
}


module.exports = {
  userSitHours,
  userSitFamily
};