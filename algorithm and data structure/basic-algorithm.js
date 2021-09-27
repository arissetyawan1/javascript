// thermometer
function convertToFahrenheit(celcius) {
  let fahrenheit;
  return (fahrenheit = (celcius * 9) / 5 + 32);
}
console.log(convertToFahrenheit(-10));

// reverse string
function reverseStr(str) {
  let reverseArray, reverseString;
  reverseArray = str.split("");
  return (reverseString = reverseArray.reverse().join(""));
}
console.log(reverseStr("hello"));

// factorial case
function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(3));

// find longest word
function findLongestWord(str) {
  // pisahkan per kalimat menjadi array
  let splitStr = str.split(" ");
  // setup index kata yang paling panjang
  let longestWord = 0;
  // loop kata tadi per index
  for (let i = 0; i < splitStr.length; i++) {
    //   cek, jika kata dari index i lebih besar dari variabel longestWord
    if (splitStr[i].length > longestWord) {
      // set kata yg paling panjang per index untuk dijadikan menjadi index kalimat yang paling panjang
      longestWord = splitStr[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox hwewsdcd over the lazy dog"));

// returning largest number in sub array
function largestNumbArray(arr) {
  return arr.map(function (subArr) {
    return Math.max.apply(null, subArr);
  });
}
console.log(
  largestNumbArray([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ])
);

// confirm ending function
function confirmEnding(string, target) {
  return string.substr(-target.length) === target ? true : false;
}
console.log(confirmEnding("Bastian", "as"));

// repeat string in string
function repeatStr(str, times) {
  if (times < 0) {
    return "";
  } else if (times === 1) {
    return str;
  } else {
    return str + repeatStr(str, times - 1);
  }
}

console.log(repeatStr("asd", 4));
