class Shape {
  constructor(text, textColor, shape, shapeColor, properties) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.properties = properties;
  }

  render() {
    return `<svg height="300" width="200">
  <${this.shape} ${this.properties} fill=${this.shapeColor}>
  <text x="0" y="50" font-family="Arial" font-size="20" fill=${this.textColor}>${this.text}</text>
</svg>` 
  }
}

class Triangle extends Shape {
  constructor(text, color, shape, shapeColor) {
    super(text, color, shape, shapeColor);
    this.properties = 'points="0 100, 50 0, 100 100';
  }
}

class Circle extends Shape {
  constructor(text, color, shape, shapeColor) {
    super(text, color, shape, shapeColor);
    this.properties = 'cx="100" cy="100" r="100"';
  }
}

class Square extends Shape {
  constructor(text, color, shape, shapeColor) {
    super(text, color, shape, shapeColor);
    this.properties = 'width="200" height="200"';
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
}