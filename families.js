class Family {
  constructor(name){
    this.name = name;
  }

  calculatePay(hours, rate){
    return hours * rate;
  }
}

const familyA = new Family('A');
//Family A pays $15 per hour before 11pm, and $20 per hour the rest of the night


module.exports = {
  familyA
}