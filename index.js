// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const path = require('path');

// Imports the shape modules exported from shapes.js
const shapes = require('./lib/shapes.js')

//QUESTION: do I need the generateShape function or is it enough to import the file????

// Defines the directory and file paths
const directoryPath = path.join(__dirname, 'lib');
const filePath = path.join(directoryPath, 'logo.svg');


// Creates an array of questions for user input - each question has an identifier eg: title
const questions = [
  {
    type: 'input',
    name: 'letters',
    message: 'What letters would you like to add to your design. (Enter 3 characters only)'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the characters to be? You can enter color names (eg: red or hexidecimal numbers eg: FF0000)
  },
  { // uses a list to give the user a choice
    type: 'list',
    name: 'shapeStyle',
    message: 'Select the shape:',
    choices: [
      'Circle',
      'Triangle',
      'Square'
    ]
  },
  {
    type: 'input',
    name: 'shpaeColor',
    message: 'What color would you like the shape to be? You can enter color names (eg: red or hexidecimal numbers eg: FF0000)
  },
  
  {
    type: 'input',
    name: 'contributors',
    message: 'Were there other contributors you would like to recognize? If so provide the information here: '
  }
];

// This is a function to write the logo.svg file
function writeToFile(NewData) {
  // Create the directory (first check to see if it exists) and then write the file using promises

  const doesDirectoryExist = (directory) => {
    return fs.access(directory)
      .then(() => {
        console.log(`Directory '${directory}' already exists.`);
      })
      .catch(() => {
        return fs.mkdir(directory, { recursive: true })
          .then(() => {
            console.log(`Directory '${directory}' created.`);
          });
      });
  };

  // Ensure the directory exists (run the check function) and then write the file
  doesDirectoryExist(directoryPath)
    .then(() => {
      const shapeDesign = NewData;
      return fs.writeFile(filePath, shapeDesign);
    })
    .then(() => {
      console.log(`Generate logo.svg`);
    })
    .catch(err => {
      console.error(`Error: ${err.message}`);
    });
};

// Initialize the app
function init() {
  // runs the prompt to go through the questions and store the answers in a data object
  inquirer
    .prompt(questions)
    .then((data) => {
      // this takes the data and uses it to create the shape information
      //const NewData = generateMarkdown(data);
      // this takes the markdown data and calls the function to create it as a file
      //writeToFile(NewData);
    });
}

init();

