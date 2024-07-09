// TODO: Create a class to create the shape based on user inputs
// code to render a test svg
// <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
//   <circle r="100" cx="150" cy="100" fill="red" />
// </svg>

// <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
//   <polygon points="150,10 290,190 10,190" fill="lime" />
// </svg>

// <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <rect width="300" height="200" fill="blue" />
// </svg>

// they have color in common so set this as the parent class

class Shape {
  constructor() {
    this.color = "";
    }

    setColor(color){
      this.color = color;
    }
}

class Circle extends Shape {
  render(){
    return `<circle r="100" cx="150" cy="100" fill="${this.color}"/>`
  }
}

class Triangle extends Shape {
  render(){
    return `<polygon points="150,10 290,190 10,190" fill="${this.color}"/>`
  }
}

class Square extends Shape {
  render(){
    return `<rect width="200" height="200" fill="${this.color}"/>`
  }
}

// export the modules to set the color of the shape and the shape itself as hmtl
module.exports = {Circle, Triangle, Square};

