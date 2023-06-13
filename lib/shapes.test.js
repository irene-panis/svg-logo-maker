const { Circle, Triangle, Square } = require('./shapes.js');

// tests for triangle
describe('Triangle', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Triangle("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Triangle("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Triangle("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for triangles', () => {
      const testShape = "polygon";
      const shape = new Triangle("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for triangles', () => {
      const testProperties = 'points="100 0, 0 200, 200 200"';
      const shape = new Triangle("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100 0, 0 200, 200 200" fill="coral"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-family="Times New Roman" font-size="40" fill="white">LOL</text>
</svg>`;
      const shape = new Triangle("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});

// tests for circle
describe('Circle', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Circle("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Circle("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Circle("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for circles', () => {
      const testShape = "circle";
      const shape = new Circle("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for circles', () => {
      const testProperties = 'cx="100" cy="100" r="100"';
      const shape = new Circle("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" fill="coral"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-family="Times New Roman" font-size="40" fill="white">LOL</text>
</svg>`;
      const shape = new Circle("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});

// tests for square
describe('Square', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Square("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Square("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Square("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for circles', () => {
      const testShape = "rect";
      const shape = new Square("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for circles', () => {
      const testProperties = 'width="200" height="200"';
      const shape = new Square("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="coral"/>
  <text x="100" y="100" text-anchor="middle" dominant-baseline="middle" font-family="Times New Roman" font-size="40" fill="white">LOL</text>
</svg>`;
      const shape = new Square("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});
