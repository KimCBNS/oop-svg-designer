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
      } //then we push the data to the next part note that I deconstructed the object so i can just use the variable names
    ]).then(({ letters, textColor, shapeStyle, shapeColor }) => {

      let shape;

      switch (shapeStyle) {
        case "Circle":
          shape = new Circle();
          break;

        case "Triangle":
          shape = new Triangle();
          break;

        default:
          shape = new Square();
          break;
      }
      shape.setColor(shapeColor);

      // using the shape and the text and text color we can build the svg element
      //pass through variables based on what we have as placeholders
      const svg = new SVG();
      svg.setText(letters, textColor);
      svg.setShape(shape);
      const finalSVG = svg.render();
      console.log(finalSVG);

      //new file name
      const fileName = "./examples/logo.svg";

      // return and write to the file svg.render()
      return writeToFile(fileName, finalSVG);

    })
  }
}

// This is a function to write the logo.svg file

  const writeToFile = (fileName, data) => {
    return fs.writeFile(fileName, data)
      .then(() => {
        console.log('Generated logo.svg');
      })
      .catch((err) => {
        console.error(err);
      });
  };


// Initialize the app
function init() {
  const newCLI = new CLI();
  newCLI.run();

}


// run the program with this init function call
init();

