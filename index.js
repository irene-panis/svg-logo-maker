const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

// standard color keywords for validation purposes
const colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

const questions = [
  {
    name: 'text',
    type: 'input',
    message: 'Please enter up to 3 characters to be featured on your logo.',
    validate: (input) => {
      if (input.length > 3) {
        return "Your input is too long! Please keep it to 3 characters or shorter!";
      }
      return true;
    }
  },
  {
    name: 'textColor',
    type: 'input',
    message: 'Please enter a color keyword for your TEXT.',
    validate: (input) => {
      if (!colors.includes(input.toLowerCase())) {
        return 'Not a valid color! Check out https://developer.mozilla.org/en-US/docs/Web/CSS/named-color for valid color keywords -- currently only the 16 standard colors are accepted.';
      }
      return true; 
    }
  },
  {
    name: 'shape',
    type: 'list',
    message: 'Which shape would you like your logo to be?',
    choices: [
      'Triangle',
      'Circle',
      'Square',
    ]
  },
  {
    name: 'shapeColor',
    type: 'input',
    message: 'Please enter a color keyword for your SHAPE.',
    validate: (input) => {
      if (!colors.includes(input.toLowerCase())) {
        return 'Not a valid color! Check out https://developer.mozilla.org/en-US/docs/Web/CSS/named-color for valid color keywords -- currently only the 16 standard colors are accepted.';
      }
      return true; 
    }
  },
];

function writeToFile(fileName, shape) {
  fs.writeFile(fileName, shape.render(), (err) => 
    err ? console.log(err) : console.log("Generated logo.svg in examples/ folder")
  );
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      switch(data.shape) {
        case "Triangle":
          const newTriangle = new shapes.Triangle(data.text, data.textColor, data.shapeColor);
          writeToFile("examples/logo.svg", newTriangle);
          break;
        case "Circle":
          const newCircle = new shapes.Circle(data.text, data.textColor, data.shapeColor);
          console.log(newCircle.render());
          writeToFile("examples/logo.svg", newCircle);
          break;
        case "Square":
          const newSquare = new shapes.Square(data.text, data.textColor, data.shapeColor);
          writeToFile("examples/logo.svg", newSquare);
          break;
      }
    });
}

init();