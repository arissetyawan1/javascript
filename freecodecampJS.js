
// Look Up Profile
// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop]
            } else {
                return "No Such Property";
            }
        }
    }
    return "No such contact";
}



console.log(lookUpProfile('Akira', 'address'));

// randomWholeNum
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

function randomRange(max, min) {
    return Math.floor(Math.random(10) * (max - min + 1)) + min;
}
console.log(randomWholeNum());
console.log(randomRange(10, 1));


// ternary operation
function checkEqual(a, b) {
    return a == b ? 'Equal' : 'Not Equal';
}
console.log(checkEqual(3, 9));

// countdown using recursive function
function countDown(n) {
    return n < 1 ? [] : [n, ...countDown(n-1)] ;
}
function rangeOfNumbers(startNum, endNum) {
  return startNum == endNum ? [startNum] : [...rangeOfNumbers(startNum, endNum-1), endNum];
};

console.log(countDown(10));
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(5, 5));