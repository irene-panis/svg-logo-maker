const Shapes = require('./shapes.js');

// tests for triangle
describe('Triangle', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Shapes.Triangle("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Shapes.Triangle("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Shapes.Triangle("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for triangles', () => {
      const testShape = "polygon";
      const shape = new Shapes.Triangle("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for triangles', () => {
      const testProperties = 'points="0 100, 50 0, 100 100"';
      const shape = new Shapes.Triangle("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg height="300" width="200">
  <polygon points="0 100, 50 0, 100 100" fill="coral">
  <text x="0" y="50" font-family="Arial" font-size="20" fill="white">LOL</text>
</svg>`;
      const shape = new Shapes.Triangle("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});

// tests for circle
describe('Circle', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Shapes.Circle("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Shapes.Circle("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Shapes.Circle("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for circles', () => {
      const testShape = "circle";
      const shape = new Shapes.Circle("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for circles', () => {
      const testProperties = 'cx="100" cy="100" r="100"';
      const shape = new Shapes.Circle("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg height="300" width="200">
  <circle cx="100" cy="100" r="100" fill="coral">
  <text x="0" y="50" font-family="Arial" font-size="20" fill="white">LOL</text>
</svg>`;
      const shape = new Shapes.Circle("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});

// tests for square
describe('Square', () => {
  describe('matching text', () => {
    it('should have the correctly assigned text value', () => {
      const testText = "LOL";
      const shape = new Shapes.Square("LOL", "white", "red");
      expect(shape.text).toEqual(testText);
    });
  });

  describe('matching text color', () => {
    it('should have the correctly assigned text color value', () => {
      const testTextColor = "red";
      const shape = new Shapes.Square("LOL", "red", "black");
      expect(shape.textColor).toEqual(testTextColor);
    });
  });

  describe('matching shape color', () => {
    it('should have the correctly assigned shape color value', () => {
      const testShapeColor = "yellow";
      const shape = new Shapes.Square("LOL", "blue", "yellow");
      expect(shape.shapeColor).toEqual(testShapeColor);
    });
  });

  describe('determine correct shape', () => {
    it('should have the correctly assigned shape value for circles', () => {
      const testShape = "rect";
      const shape = new Shapes.Square("LOL", "blue", "yellow");
      expect(shape.shape).toEqual(testShape);
    });
  });

  describe('matching properties', () => {
    it('should have the correctly assigned properties for circles', () => {
      const testProperties = 'width="200" height="200"';
      const shape = new Shapes.Square("LOL", "blue", "yellow");
      expect(shape.properties).toEqual(testProperties);
    });
  });

  describe('rendered string', () => {
    it('should render the resulting svg string correctly', () => {
      const testRender = `<svg height="300" width="200">
  <rect width="200" height="200" fill="coral">
  <text x="0" y="50" font-family="Arial" font-size="20" fill="white">LOL</text>
</svg>`;
      const shape = new Shapes.Square("LOL", "white", "coral");
      expect(shape.render()).toEqual(testRender);
    });
  });
});
