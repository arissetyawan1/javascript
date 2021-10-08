// function example(param1, param2, aCallbackFunction) {
//   console.log(`Hello ini parameter ${param1} dan parameter ${param2}`);
//   console.log("hello ini memanggil function callback \n");
//   aCallbackFunction();
// }

// function aCallbackFunction(param1 =3, param2 =5) {
//   console.log(param1 + param2);
// }

// console.log(example(2, 4, aCallbackFunction));

// callback digantung doi

function countDown(count = 10) {
  const delay = 1000;
  const interval = setInterval(onTimeInterval, delay);

  function onTimeInterval() {
    count--;
    console.log(count);
    if (count <= 0) {
      console.log(message);
      clearInterval(interval);
    }
  }
}

// countDown(100, "Waktu habis");

function greeting(name) {
  console.log(`Hello ${name}`);
}

function greetMe(callback, name) {
  console.log("Welcome back");
  callback(name);
}

// greetMe(greeting, "Hendra");

/*
  Sebuah perintah
*/
const kapanYaEnaknyaNembakDoi = (count) => {
  let delay = 2000;
  setTimeout(() => {
    if (count > delay) {
      console.log("Mampus lu dia sama doi virtualnya kan, kelamaan sih");
    } else {
      console.log("Gas mumpung kecantol");
    }
  }, delay);
};

// kapanYaEnaknyaNembakDoi(3000);

function greetings(name, callback) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
  }, 5000);
  callback();
}

function hola() {
  setTimeout(() => {
    console.log(`Selamat datang, fungsi callback ini terpanggil`);
  }, 2000);
}

greetings("Andrian", hola);

// Core concepts callback and rest parameter
function kali(num1, num2) {
  return num1 * num2;
}

function kurang(num1, num2) {
  return num1 - num2;
}

function jumlah(num1, num2) {
  return num1 + num2;
}
const hitung = (functions, num1, num2) => {
  let hasil = functions(num1, num2);

  return hasil;
};

console.log(hitung(jumlah, 3, 3));
console.log(hitung(kurang, 3, 4));
console.log(hitung(kali, 3, 5));

function kelilingPersegi(...sisi) {
  let keliling = 0;
  sisi.filter((el) => (keliling = keliling + el));
  return keliling;
}
const kelilingBangunDatar = (functions, ...sisi) => {
  let hasil = functions(...sisi);

  return hasil;
};


console.log(kelilingBangunDatar(kelilingPersegi, 2,3,4,3));