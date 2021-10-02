class Shape {
  // ini merupakan constructor
  constructor(name, sideLength) {
    this.sideLength = sideLength;
    this.name = name;
  }

  // class method yang akan mengembalikan nilai sideLength dikali 3
  get calcShape() {
    return this.sideLength * 3;
  }
}

// variabel square merupakan bentuk dari inheritance objek shape
let square = new Shape("persegi", 4);
console.log(square.name);
console.log(square.calcShape);
