// Array and Looping Question
// 1
const last = (arr, n = 0) => {
  let sortArr;
  sortArr = arr.reverse();
  if (n > sortArr.length) {
    return sortArr;
  } else {
    return sortArr.filter((val) => val < n);
  }
};
// console.log(last([8, 2, 0, -7]));
// console.log(last([8, 2, 0, -7], 3));
// console.log(last([8, 2, 0, -7], 8));

// 2
let myAnimal = ["Cow", "Lion", "Frog", "Whale"];
// console.log(myAnimal.join(", "));
// console.log(myAnimal.sort().join(", "));

// 3
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// console.log(union([4, 5, 6], [100, 5, 4, 10]));

// 4
function diffArray(arr1, arr2) {
  return arr1
    .filter((index) => arr2.includes(index))
    .concat(arr2.filter((index) => arr1.includes(index)));
}

// console.log(diffArray([1, 2, 6], [200, 2, 1, 14]));

// 5
const unzip = (arr) => {
  let concatArr = [].concat(...arr);
  let arrNum = [],
    arrSt = [],
    arrBool = [],
    newArr = [];
  concatArr.filter(function (index) {
    if (typeof index === "string") {
      return arrSt.push(index);
    } else if (typeof index === "number") {
      return arrNum.push(index);
    } else if(typeof index === 'boolean'){
      return arrBool.push(index);
    }
  });
  newArr.push(arrSt, arrNum, arrBool);
  return newArr;
};

console.log(
  unzip([
    ["a", 1, true],
    ["b", 2, false],
  ])

  );
console.log(
  unzip([
    ["a", 1, true],
    ["b", 2],
  ])
);

// Question Object
// 1
let student = {
  name: "Budi Susanto",
  class: "VI",
  houseNumber: 12,
};

let indro = student;
indro.address = "Bandung";

// console.log(indro);

// 2
let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

let arr = [];
for (let i = 0; i < library.length; i++) {
  const ordered = Object.keys(library[i])
    .sort()
    .reduce((obj, key) => {
      obj[key] = library[i][key];
      return obj;
    }, {});
  arr.push(ordered);
}

// console.log(arr.sort((a, b) => b.libraryID - a.libraryID));

// 3
let students = {
  name: "Budi Sudrajat",
  sclass: "VI",
  houseNumber: 20,
};

// console.log(students);
// delete students.houseNumber;
// console.log(students);

// Question Class
class Shape {
  constructor(name, sideLength) {
    this._name = name;
    this._sideLength = sideLength;
  }
  get calcParameter() {
    if (this._name == "persegi" || this._name == "kubus") {
      return this._sideLength * 4;
    } else if (this._name == "segitiga") {
      return this._sideLength * 3;
    } else {
      return "unknown shape";
    }
  }
}

let square = new Shape("persegi", 3);
// console.log(`Shape name is = ${square._name}`);
// console.log(`Keliling bangun = ${square.calcParameter}`);

// const array2 = [2, 3, 4, 12, 4, 512];
// console.log([...new Set([...arrays, ...array2])]);
// const arrays = [2, 3, 53, 12, 2, 123, 0];
