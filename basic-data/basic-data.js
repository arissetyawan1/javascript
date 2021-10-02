// splice array

const number = [1, 2, 3, 4, 5];

const startIndex = 0;
const amountToDelete = 2;
number.splice(startIndex, amountToDelete, 12, 40);

console.log(number);

// slice array
let weather = ["rainy", "snow", "hot"];
let currentWeathe = weather.slice(1, 3);
console.log(currentWeathe);

// spread array
let thisArray = [true, true, undefined, false, null];
let thatArray = [0, ...thisArray];
console.log(thatArray);

function spreadArray(arr, number) {
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push([...arr]);
  }
  return newArray;
}

console.log(spreadArray([2, 3], 2));

// for loop
function greaterThan(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThan([20, 1, 2, 3, 40, 310, 10, 22, 8]));

// js data object
let food = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

// Only change code below this line
food.bananas = 13;
food["grape"] = 35;
food["strawberries"] = 27;
// Only change code above this line

console.log(food);

// nested object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;
console.log(userActivity);

// access with bracket notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// delete key object
let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

delete fruits.oranges;
delete fruits.plums;
delete fruits.strawberries;
console.log(fruits);

// checking property
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => {
    userObj.hasOwnProperty(name);
  });
  // Only change code above this line
}

console.log(isEveryoneHere(users));

// for .. in iterate object
let cat = {
  name: "Candy",
  color: "Yellow",
};

for (const key in cat) {
  const element = cat[key];
  console.log(element);
}


// stored object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, "Pete"));
let angka = 23423;
console.log(angka[2]);