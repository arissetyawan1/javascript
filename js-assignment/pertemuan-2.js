// Array methods
// each function
const each = (array, callback) => {
  return array.forEach((val) => {
    callback(val);
  });
};

// each([1, 2, 3, 4], (val) => console.log(val));
// each([1, 2, 3, 4], (val) => console.log(val * 2));

// map
const map = (array, callback) => {
  let newArr = [];
  newArr = array.map((e) => {
    return callback(e);
  });
  return newArr;
};

// console.log(map([1, 2, 3, 4], (val) => val * 2));

// reject function
const reject = (array, callback) => {
  return array.filter((e) => {
    return !callback(e);
  });
};

// console.log(reject([1, 2, 3, 4], (val) => val > 2));

// throw error
const myString = (str) => {
  try {
    let newStr =str.split("").reverse().join("");
    console.log(`Reversed string is : ${newStr}`);
    console.log(`Type of myString is : ${typeof newStr}`);
  } catch (error) {
    console.log(error);
    console.log(` Type of myString is : ${typeof str}`);
  }
};

myString("1234");
myString(1234);
