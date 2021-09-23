// let and var declaration
let printTwo;

for (let index = 0; index < 3; index++) {
  if (index === 2) {
    printTwo = () => {
      return index;
    };
  }
}

console.log(printTwo());
// console.log(index);

// arrow function
let sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 2));

var myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [5, 7]));

// arrow function with default value
let multiple = (num1, num2 = 2) => num1 * num2;
console.log(multiple(2));

// rest and spread function
let restFunc = (...argument) => {
  return `Hello myname is ${argument[0]}. Iam ${argument[1]}`;
};

console.log(restFunc("Adam", 10));

// Destructing Object
const WEATHER = {
  city: "Jakarta",
  temp: 20,
};

const { temp, city } = WEATHER;
console.log(WEATHER.city);

// change a key and value of object
const cities = {
  name: "Jakarta",
  province: "DKI",
};

const { name: cityName, province = "Jawa Barat" } = cities;
console.log(cities.name);

// Nested object in object
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(LOCAL_FORECAST.today);

const [a, b, c] = [1, 2, 3, 4];
console.log(a, b, c);
const [j, k, , , l] = [1, 45, 6, 7, 453, 1];
console.log(j, k, l);
{
  let a = 8,
    b = 6;
  console.log([b, a]);
}

// String iteral
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}
const failuresList = makeList(result.skipped);
console.log(failuresList);

// concise object literal
const person = (name, age, address) => ({
  name,
  age,
  address,
});

console.log(person("aris", 10, "tenggarong"));

// Using declarative (arrow function) in object
const car = {
  type: "Sedan",
  getType(type) {
    return (this.type = type);
  },
};

car.getType("Mobil Angkuran");
console.log(car.type);

// class with constructor function
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const rabbit = new Vegetable("rabbit");
console.log(rabbit.name);

// getter and setter
// class Thermostat {
//   constructor(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }

//   get getTemp() {
//     return this._fahrenheit;
//   }

//   set setTemp(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }
// }

// const temperature = new Thermostat(20);
// console.log(temperature._fahrenheit);
// temperature.setTemp = 23;
// console.log(temperature.getTemp);

// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature;
//   }

//   get temperature() {
//     return this._temperature;
//   }

//   set temperature(temperature) {
//     this._temperature = temperature;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// promise
const makeServerRequest = new Promise((resolve, reject) => {
  let promises = false;
  if (promises) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
