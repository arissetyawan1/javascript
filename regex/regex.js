// contoh 1
let firstReg = "Example of regex";
let findWord = /regex/;

console.log(findWord.test(firstReg));

// contoh 2 OR ( || )
let animalName = "Ini burungs";
let find = /kucing || anjing ||burung/;
console.log(find.test(animalName));

// contoh 3 global regex
let kalimat = "Contoh kalimat dalam javasccript";
let findKalimat = /contoh/i;
console.log(findKalimat.test(kalimat));

// contoh 4
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/; // Change this line
quoteSample.match(myRegex); // Change this line

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);
