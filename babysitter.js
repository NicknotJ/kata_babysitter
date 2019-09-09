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
    let input = await ask('What family did you sit for?\n');
    store.family = calculations.userSitFamily(input);
    if(store.family === 'Y'){
      console.log(`I'm sorry, there is no family${input}`);
    }
    if(store.family === 'Z'){
      console.log("Please input an alphabetical letter");
    }
  } while (store.family === 'Y' || store.family === 'Z');
  let errorMessage;
  do {
  if(errorMessage){
    console.log(`ERROR: ${errorMessage} Please try again.`);
  }
  errorMessage = '';
  attempt = 1;
  store.startNumber = await ask('What time (number only) did you start sitting?\n');
  store.startTime = await ask('Did you start in the am or pm?\n');
  if(calculations.convertTime(store.startNumber, store.startTime) === -1){
    errorMessage = 'Starting times must be at/after 5pm and before 4am.';
    continue;
  }
  store.endNumber = await ask('What time (number only) did you stop sitting?\n');
  store.endTime = await ask('Did you stop in the am or pm?\n');
  if(calculations.convertTime(store.endNumber, store.endTime) === -1){
    errorMessage = 'End times must be after 5pm and before/at 4am.';
    continue;
  }
  } while (calculations.userSitHours(store.startNumber, store.startTime, store.endNumber, store.endTime) === -1);
  amountEarned = families.families[store.family].totalAmount(store.startNumber, store.startTime, store.endNumber, store.endTime);
  console.log('Congratulations, you earned ' + amountEarned + ' dollars!');
}



babysit();


module.exports = {
  babysit,
  store
}