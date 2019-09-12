const calculations = require('./calculations');
const families = require('./families');


const store = {
  family: 'Y',
  startNumber: undefined,
  startTime: undefined,
  endNumber: undefined,
  endTime: undefined,
  errorMessage: ''
};

// async function babysit(){
//    console.log('Hello! Welcome to Baby$at v 0.1.');
//   //  let greetingTimer = (exampleFunction) => setTimeout(exampleFunction, 1500);
   
//   //  greetingTimer(exampleFunction);
//   do {
//     let input = await ask('What family did you sit for?\n');
//     store.family = calculations.userSitFamily(input);
//     if(store.family === 'Y'){
//       console.log(`I'm sorry, there is no family${input}`);
//     }
//     if(store.family === 'Z'){
//       console.log("Please input an alphabetical letter");
//     }
//   } while (store.family === 'Y' || store.family === 'Z');
//   do {
//   if(store.errorMessage){
//     console.log(`ERROR: ${store.errorMessage} Please try again.`);
//   }
//   store.errorMessage = '';
//   attempt = 1;
//   store.startNumber = await ask('What time (number only) did you start sitting?\n');
//   store.startTime = await ask('Did you start in the am or pm?\n');
//   if(calculations.convertTime(store.startNumber, store.startTime) === -1){
//     store.errorMessage = 'Starting times must be at/after 5pm and before 4am.';
//     continue;
//   }
//   store.endNumber = await ask('What time (number only) did you stop sitting?\n');
//   store.endTime = await ask('Did you stop in the am or pm?\n');
//   if(calculations.convertTime(store.endNumber, store.endTime) === -1){
//     store.errorMessage = 'End times must be after 5pm and before/at 4am.';
//     continue;
//   }  
//   if(calculations.userSitHours(store.startNumber, store.startTime, store.endNumber, store.endTime) === -1){
//     store.errorMessage = 'Starting Times must be before End Times.';
//     continue;
//   }
//   //currently cannot handle mistyping of am/pm
//   } while (calculations.userSitHours(store.startNumber, store.startTime, store.endNumber, store.endTime) === -1);
//   amountEarned = families.families[store.family].totalAmount(store.startNumber, store.startTime, store.endNumber, store.endTime);
//   console.log('Congratulations, you earned ' + amountEarned + ' dollars!');
// }


module.exports = {}