const calculations = require('./calculations');
const families = require('./families');
const readline = require('readline');


const store = {
  family: 'Y',
  startNumber: undefined,
  startTime: undefined,
  endNumber: undefined,
  endTime: undefined
};

const readlineInterface = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
async function babysit(){
   console.log('Hello! Welcome to Baby$at v 0.1.');
  //  let greetingTimer = (exampleFunction) => setTimeout(exampleFunction, 1500);
   
  //  greetingTimer(exampleFunction);
  do {
    store.family = await ask('What family did you sit for?');
    if(store.family === 'Y'){
      console.log(`I'm sorry, there is no family${store.family}`);
    }
    if(store.family === 'Z'){
      console.log("Please input an alphabetical letter");
    }
  } while (store.family === 'Y' || store.family === 'Z');
  
    console.log(store.family);
  store.startNumber = await ask('What time (number only) did you start sitting?');
  store.startTime = await ask('Did you start in the am or pm?');
  store.endNumber = await ask('What time (number only) did you stop sitting?');
  store.endTime = await ask('Did you stop in the am or pm?');
  amountEarned = families.families[store.family].totalAmount(store.startNumber, store.startTime, store.endNumber, store.endTime);
  console.log('Congratulations, you earned ' + amountEarned + 'dollars!');
}



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
babysit();


module.exports = {
  babysit,
  store
}