let text = document.getElementById('hello').innerHTML = 'Hello, World!!!';
let jumlah = document.querySelector('.jumlah');
let elementLoop = document.querySelector('.loop'),
    ketAngka = document.querySelector('.elementArray');
let a = 10, b = 4, c = 2, hasil;

hasil = a + b + c;
if (hasil >= 10) {
    jumlah.innerHTML = hasil;
} else {
    jumlah.innerHTML = hasil;
}

let texts= "";
for (let index = 0; index < 10; index++) {
    texts += "Loop ke-" + index + '<br>';
}

const person = {
    name: "Aris",
    born: "16-10-1999",
    address : "Batuceper"
}

var inputNum = 33,
    ket = inputNum % 2 === 0 ? 'Angka Genap<br>' : 'Angka Ganjil<br>';
elementLoop.innerHTML = texts;
var myStr = "Jello";
myStr = "H";
console.log(myStr);

var arrayBil = [2, 3, 5, 6, 10, 14, 17, 19];
var ket;
arrayBil.forEach(element => {
    if (element % 2 == 0) {
        ket += element+ " Bilang Genap <br>";
    } else {
        ket += element + " Bilang Ganjil <br>";
    }
});
ketAngka.innerHTML = ket;
console.log(text);