const inquirer = require('inquirer');
let store = {};

const questions = [
  {
    type: 'list',
    name: 'family',
    message: 'Which family did you sit for?',
    choices: ['A', 'B', 'C']
  },
  {
    type: 'number',
    name: 'startNumber',
    message: 'When did you start babysitting (number only)?',
    choices: [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]
  }
]

//This first part is not going to work... we need to set something up so
//we get a userInput and then call ask. Or do we just do it all through
//inquirer?
inquirer.prompt(questions).then(answers => {
  store.family = answers.family;
  console.log(answers);
  console.log(`Okay, you sat for family ${store.family}`);
})
