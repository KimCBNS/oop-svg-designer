// simplified object need this to build an svg element to hold the shape.
// this is the box the element and text will go in


// <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
//   <circle r="100" cx="150" cy="100" fill="red" />
// </svg>


class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }
  // methods to set color, shape, etc
  render() {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
${this.shapeElement} ${this.textElement}
</svg>`
  }

  setText(textDisplay, color) {
    if (textDisplay.length > 3) {
      throw new Error("You must enter 3 characters or less");
    }
    this.textElement = `<text x="140" y="110" text-anchor="middle" dominant-baseline="middle" font-size="55px" fill="${color}">${textDisplay}</text>`

  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG