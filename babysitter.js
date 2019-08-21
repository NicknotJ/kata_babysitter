const calculations = require('./calculations');
const families = require('./families');
const readline = require('readline');


function main(){
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  r1.question('Which family did you sit for?', (answer) => {
    console.log(`You sat for family${answer}`);
    r1.close();
  });
}

main();

module.exports = {
  main
}