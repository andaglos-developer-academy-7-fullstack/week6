/*
Tugas 3
Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!

var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
}
*/

let arr = [5, 1, 7, 6, 9];

let reduceFindMaximum = arr.reduce(isiArr => {
  arr.sort();
  return arr[arr.length - 1];
});

console.log(reduceFindMaximum); // 9
