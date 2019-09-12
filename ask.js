const inquirer = require('inquirer');
let store = {};

const questions = [
  {
    type: 'list',
    name: 'family',
    message: 'Which family did you sit for?',
    choices: ['A', 'B', 'C']
  }
]
inquirer.prompt(questions).then(answers => {
  store.family = answers.family;
  console.log(`Okay, you sat for family ${store.family}`);
});

