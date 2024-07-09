// const inquirer = require('inquirer');

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'test',
//     message: 'Is this working?'
//   }
// ]).then(answers => {
//   console.log('Your answer:', answers.test);
// }).catch(error => {
//   console.error('Error:', error);
// });

const inquirer = require('inquirer');
//import inquirer from 'inquirer';

console.log('Inquirer version:', inquirer.VERSION); // Check if inquirer is loaded and version is available

inquirer.prompt([
  {
    type: 'input',
    name: 'test',
    message: 'Is this working?'
  }
]).then(answers => {
  console.log('Your answer:', answers.test);
}).catch(error => {
  console.error('Error:', error);
});