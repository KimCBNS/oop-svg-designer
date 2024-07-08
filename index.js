// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Imports the shape modules exported from shapes.js and svg.js
const { Circle, Square, Triangle } = require('./lib/shapes.js')
const SVG = require('./lib/svg.js')


// Creates an array of questions for user input - each question has an identifier eg: title
class CLI {
  run() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'letters',
        message: 'What letters would you like to add to your design. (Enter 3 characters only)'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the characters to be? You can enter color names (eg: red or hexidecimal numbers eg: FF0000)'
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
        name: 'shapeColor',
        message: 'What color would you like the shape to be? You can enter color names (eg: red or hexidecimal numbers eg: FF0000)'
      }
    ]).then(({ letters, textColor, shapeType, shapeColor }) => {
      let shape;

      switch (shapeType) {
        case "circle":
          shape = new Circle();
          break;

        case "triangle":
          shape = new Triangle();
          break;

        default:
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);
      const svg = new SVG() //pass through variables based on what we have as placeholders

      // return and write to the file svg.render()
    })

  }
}



// This is a function to write the logo.svg file
function writeToFile(NewData) {

};

// Initialize the app
function init() {

  
}

init();

