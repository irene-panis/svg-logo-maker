class Shape {
  constructor(text, textColor, shapeColor, shape, properties) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.properties = properties;
  }

  render() {
    return `<svg height="300" width="200">
  <${this.shape} ${this.properties} fill="${this.shapeColor}"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-family="Times New Roman" font-size="40" fill="${this.textColor}">${this.text}</text>
</svg>` 
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "polygon";
    this.properties = 'points="100 0, 0 200, 200 200"';
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "circle";
    this.properties = 'cx="100" cy="100" r="100"';
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    this.shape = "rect";
    this.properties = 'width="200" height="200"';
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
}