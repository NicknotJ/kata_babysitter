const calculations = require('./calculations');
const families = require('./families');
const readline = require('readline');


let store = {
  family: undefined,
  startNumber: undefined,
  startTime: undefined,
  endNumber: undefined,
  endTime: undefined
};

function babysit(){
   console.log('What is your name?');
   process.stdin.once('data', (chunk) => {
     let name = chunk.toString().trim();
     console.log('Hello, ' + name + '!');
     process.exit();
   });
  //prompt is showing up way later than question
  //Flowchart of user actions/interactions
  //Generic Greeting: Welcome to Baby$at V 0.01
  //Question: Which family did you sit for (Please input a letter)?
    //if answer is Aa/Bb/Cc -> store variable, continue
    //if answer returns Y -> Sorry, no family'letter' in database
    //if answer returns Z -> Please input a roman letter
  //When did you start sitting (number only?)
  //When did you start sitting (pm/am)?
    //check if answer is possible, if not go back to when did you start sitting?
  //When did you stop sitting (number only?)
  //When did you stop sitting (pm/am)?
    //check if answer is possible, if not go back to when did you stop sitting?
  //Return amount earned
  //Thank you and have fun spending your hard earned money!
  function end(){
    r1.close();
  }
};

babysit();


module.exports = {
  babysit,
  store
}