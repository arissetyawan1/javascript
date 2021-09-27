function example(param1, param2, aCallbackFunction) {
  console.log(`Hello ini parameter ${param1} dan parameter ${param2}`);
  console.log("hello ini memanggil function callback \n");
  aCallbackFunction();
}

function aCallbackFunction(param1 =3, param2 =5) {
  console.log(param1 + param2);
}

console.log(example(2, 4, aCallbackFunction));
