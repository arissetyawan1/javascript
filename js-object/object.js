// basic object in js

// contoh object literal
let manusia = {
  name: "Aris",
  age: 29,
  porsiMakan: 2,
  makan: function (porsi) {
    this.porsiMakan += porsi;
    return `Hei ${this.name}, porsi makan kamu skrg ${this.porsiMakan}`;
  },
};
console.log(manusia.makan(9));

let animal = {
  nama: "Kucing",
  jenis: "Berkaki 4",
  color: function (skinColor) {
    return `Hello ${this.nama}, saya ${this.jenis}, warna kulit saya ${skinColor}`;
  },
};

console.log(animal.color("Sky blue"));

// functional object
function bangunDatar(namaBangun) {
  let BangunDatar = {};
  BangunDatar.namaBangun = namaBangun;
  BangunDatar.luas = function hitungLuas(panjang, lebar) {
    BangunDatar.panjang = panjang;
    BangunDatar.lebar = lebar;
    let luas = panjang * lebar;
    return `Nama Bangun ${this.namaBangun}, lebarnya ${lebar} panjangnya ${panjang}. Luas bangunnya ${luas}`;
  };

  return BangunDatar;
}

let persegi = bangunDatar("Persegi");
console.log(persegi.luas(4, 3));
