class Rectangle {
  constructor(width, height) {
    this._width = width; // Use private property convention with "_"
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}
class Square extends Rectangle {
  constructor(side) {
    super(side, side); // Call the parent constructor with equal width and height
  }
  getPerimeter() {
    return 4 * this._width; // Or this._height, as they're the same for a square
  }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

