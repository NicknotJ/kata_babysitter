const calculations = require('./calculations');
const families = require('./families');
const readline = require('readline');


function main(){
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Hello and welcome to Baby$at V 0.01'
  });
  r1.question('What family did you sit for (Example: A)?', (answer) => {
    console.log(`Oh, so you sat for Family${answer}?`);
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
}

main();

module.exports = {
  main
}