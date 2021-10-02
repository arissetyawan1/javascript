// Question Introduction #1
// 1
let sample1 = "budi is waeboo and he have";
let sample2 = 20;
let sample3 = "collecetion of anime video";
// console.log(`Sample 1 = ${sample1} `);
// console.log(`Sample 2 = ${sample2} `);
// console.log(`Sample 3 = ${sample3}`);

// 2
// console.log(`${sample1} ${sample2} ${sample3}`);
// console.log(sample1.length + sample2.toString().length + sample3.length);

// // 3
// let sample4 = "but budi denailed it.";
// let sample5 = sample4 + "even though he was caught watching".toUpperCase();
// console.log(sample5);

// // 4
// let sqrT = 5;
// console.log(`hasil dari 5 pangkat 5 = ${Math.pow(sqrT, 5)}`);

// 5
// let lastSample = "hours per day";
// console.log(typeof Boolean === lastSample);

// // 6
// console.log(typeof lastSample);

// // Question Variable #2
// 1

// 2
let text1;
let text2;
// console.log(text1);
// console.log(text2);

// 3
text1 = "Dignitas BKA ";
text2 = "Develop ";
let countName = text1.length;

// 4
countName = text1.length + 10;
// console.log(countName);

// 5
let allWordCount = text1 + text2 + countName.toString();

// 6
// console.log(`${allWordCount} application`);

// 7
// console.log(typeof allWordCount, typeof text1, typeof text2, typeof countName);

// // Question Conditional #3
// 1
// if (a % 2 == 0) {
//   console.log("this is an even number");
// } else {
//   console.log("this is not an even number");
// }

// // 2
let b = 8;
// let jumlahkan = a + b;
// if (b % 2 == 0 && jumlahkan > b) {
//   console.log(`${b} is even number and result of ${a} + ${b} more than ${b}`);
// }

 // 3
let a = 4;
// a != null
//   ? console.log(`variable a have an value ${a}`)
//   : console.log(`variable b have an value ${b}`);

// //   Question Functional #4
// // 1
// function capitalizeWord(str) {
//   let splitStr = str.split(" ");
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
//   }
//   const capitalize = splitStr.join(" ");
//   return capitalize;
// }

// console.log(capitalizeWord("dignitas bka is coolest academy"));

// 2
// function longestWord(str) {
//   let splitStrToArray = str.split(" ");
//   let longestWord = "";
//   // for (let index = 0; index < splitStrToArray.length; index++) {
//   //   if (splitStrToArray[index].length > longestWord.length) {
//   //     longestWord = splitStrToArray[index];
//   //   }
//   // }
//   longestWord = splitStrToArray.sort((a, b) => b.length - a.length);
//   return longestWord[0];
// }

// console.log(longestWord("hello sayaaaa"));


// // 3
const reverseNumber = (num) => {
  let arrayNum;
  arrayNum = num.toString().split("").reverse().join("");
  return parseInt(arrayNum);
};

// console.log(reverseNumber(231321));


// 4
function secondLargeNumber(arr) {
  let secondLowest,
    secondLargest,
    newArr = [];
  secondLowest = Math.min(arr.sort((a, b) => a - b)[1]);
  secondLargest = Math.max(arr.sort((a, b) => b - a)[1]);
  newArr.push(secondLowest, secondLargest);
  return newArr;
}

console.log(secondLargeNumber([0, 32, 253, 10, 5]));


