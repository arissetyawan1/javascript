// intro object
let firstObj = {
  name: "aris",
  age: 34,
  berjalan: function (cara) {
    console.log(`Berjalan ke ${cara}`);
  },
};

// name, age is key | aris, 34 is value
firstObj.age = 40;
firstObj.berjalan("depan");

// deleting property (props)
delete firstObj.name;
console.log(firstObj);

/**
 * konsep objek
 *
 * Objek melambangkan sesuatu hal / collection dari suatu object (key : value)
 * Constructor = method pertama kali saat dipanggil dalam pembuatan class
 *
 * Konsep Array
 * Array melambangkan data
 * 
 * 
 * 
 */
