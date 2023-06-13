class Shape { // shape class so we dont need to deal with these in subclasses
  constructor(text, textColor, shapeColor, shape, properties) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.properties = properties;
  }

  // renders svg string using input data
  render() {
    return `<svg height="300" width="200">
  <${this.shape} ${this.properties} fill="${this.shapeColor}"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-family="Times New Roman" font-size="40" fill="${this.textColor}">${this.text}</text>
</svg>` 
  }
}

// triangle class
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // allows use of shape stuff
    this.shape = "polygon"; // sets shape property to polygon
    this.properties = 'points="100 0, 0 200, 200 200"'; // sets properties to ones we need to create triangle
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "circle"; // sets shape to circle
    this.properties = 'cx="100" cy="100" r="100"'; // lists circle radius and center coords
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "rect"; // sets shape to rectangle
    this.properties = 'width="200" height="200"'; // makes square
  }
}

// exports
module.exports = {
  Triangle,
  Circle,
  Square,
}