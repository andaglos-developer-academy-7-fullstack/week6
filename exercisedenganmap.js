/*
Tugas 1
Buatlah sebuah code yang mentransformasi array menggunakan map!
  // Ubah setiap element array menjadi lowercase!
*/


let arr = ['BUDI', 'MArNi', 'mukIDi'];

let transformasiArrTolowerCase = arr.map(isiArr => {
  return isiArr.toLowerCase();
})

console.log(transformasiArrTolowerCase)//['budi'.'marni','mukidi]


