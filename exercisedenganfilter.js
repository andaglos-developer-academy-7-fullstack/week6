/*
Tugas 2
Buatlah sebuah code yang melakukan filter ke array menggunakan filter!

var filterArrUnder10 = arr => {
  // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
};
*/

let arr = [1, 5, 12, 15, 20];

let filterArrUnder10 = arr.filter(isiArr => {
  return isiArr > 10;
})

console.log(filterArrUnder10); // [12, 15, 20]