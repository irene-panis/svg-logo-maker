const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

// color keywords for validation purposes
const colors = [`AliceBlue`, `AntiqueWhite`, `Aqua`,`Aquamarine`,`Azure`,`Beige`,`Bisque`,`Black`,`BlanchedAlmond`,`Blue`,`BlueViolet`,`Brown`,`BurlyWood`,`CadetBlue`,`Chartreuse`,`Chocolate`,`Coral`,`CornflowerBlue`,`Cornsilk`,`Crimson`,`Cyan`,`DarkBlue`,`DarkCyan`,`DarkGoldenRod`,`DarkGray`,`DarkGrey`,`DarkGreen`,`DarkKhaki`,`DarkMagenta`,`DarkOliveGreen`,`Darkorange`,`DarkOrchid`,`DarkRed`,`DarkSalmon`,`DarkSeaGreen`,`DarkSlateBlue`,`DarkSlateGray`,`DarkSlateGrey`,`DarkTurquoise`,`DarkViolet`,`DeepPink`,`DeepSkyBlue`,`DimGray`,`DimGrey`,`DodgerBlue`,`FireBrick`,`FloralWhite`,`ForestGreen`,`Fuchsia`,`Gainsboro`,`GhostWhite`,`Gold`,`GoldenRod`,`Gray`,`Grey`,`Green`,`GreenYellow`,`HoneyDew`,`HotPink`,`IndianRed`,`Indigo`,`Ivory`,`Khaki`,`Lavender`,`LavenderBlush`,`LawnGreen`,`LemonChiffon`,`LightBlue`,`LightCoral`,`LightCyan`,`LightGoldenRodYellow`,`LightGray`,`LightGrey`,`LightGreen`,`LightPink`,`LightSalmon`,`LightSeaGreen`,`LightSkyBlue`,`LightSlateGray`,`LightSlateGrey`,`LightSteelBlue`,`LightYellow`,`Lime`,`LimeGreen`,`Linen`,`Magenta`,`Maroon`,`MediumAquaMarine`,`MediumBlue`,`MediumOrchid`,`MediumPurple`,`MediumSeaGreen`,`MediumSlateBlue`,`MediumSpringGreen`,`MediumTurquoise`,`MediumVioletRed`,`MidnightBlue`,`MintCream`,`MistyRose`,`Moccasin`,`NavajoWhite`,`Navy`,`OldLace`,`Olive`,`OliveDrab`,`Orange`,`OrangeRed`,`Orchid`,`PaleGoldenRod`,`PaleGreen`,`PaleTurquoise`,`PaleVioletRed`,`PapayaWhip`,`PeachPuff`,`Peru`,`Pink`,`Plum`,`PowderBlue`,`Purple`,`Red`,`RosyBrown`,`RoyalBlue`,`SaddleBrown`,`Salmon`,`SandyBrown`,`SeaGreen`,`SeaShell`,`Sienna`,`Silver`,`SkyBlue`,`SlateBlue`,`SlateGray`,`SlateGrey`,`Snow`,`SpringGreen`,`SteelBlue`,`Tan`,`Teal`,`Thistle`,`Tomato`,`Turquoise`,`Violet`,`Wheat`,`White`,`WhiteSmoke`,`Yellow`,`YellowGreen`].map(color => color.toLowerCase());

const questions = [
  {
    name: 'text',
    type: 'input',
    message: 'Please enter up to 3 characters to be featured on your logo.',
    // validate if input is 3 chars
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
    // validates if color keyword exists
    validate: (input) => {
      if (!colors.includes(input.toLowerCase())) {
        return 'Not a valid color! Check out https://developer.mozilla.org/en-US/docs/Web/CSS/named-color for valid color keywords.';
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
    // validates if color keyword exists
    validate: (input) => {
      if (!colors.includes(input.toLowerCase())) {
        return 'Not a valid color! Check out https://developer.mozilla.org/en-US/docs/Web/CSS/named-color for valid color keywords.';
      }
      return true; 
    }
  },
];

// writes svg content into file
function writeToFile(fileName, shape) {
  fs.writeFile(fileName, shape.render(), (err) => 
    err ? console.log(err) : console.log("Generated logo.svg in examples/ folder")
  );
}

// initialize to start prompts
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      // switch statement to handle different shapes
      switch(data.shape) {
        case "Triangle":
          const newTriangle = new Triangle(data.text, data.textColor, data.shapeColor);
          writeToFile("examples/logo.svg", newTriangle);
          break;
        case "Circle":
          const newCircle = new Circle(data.text, data.textColor, data.shapeColor);
          writeToFile("examples/logo.svg", newCircle);
          break;
        case "Square":
          const newSquare = new Square(data.text, data.textColor, data.shapeColor);
          writeToFile("examples/logo.svg", newSquare);
          break;
      }
    });
}

init();