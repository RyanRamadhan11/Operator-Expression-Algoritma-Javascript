// 1. membuat perintah untuk melakukan pengecekan nilai ganjil atau genap
// dan cek apakah negatif atau positif, nilai yang dibandingkannya tidak lebih dari 1000 tidak kurang dari - 1000
// expected output : Ganjil Negatif, Ganjil Positif, Genap Positif, Genap Negatif

// let a = window.prompt("Enter your name: ");

// if (a % 2 == 0 && a > 0) {
//     console.log("Nilai Genap Positif")
// } else if (a % 2 == 0 && a < 0) {
//     console.log("Nilai Genap Negatif")
// } else if (a % 2 != 0 && a > 0) {
//     console.log("Nilai Ganjil Positif")
// } else if (a % 2 != 0 && a < 0) {
//     console.log("Nilai ganjil Negatif")
// } else if (a > 1000 && a < 1000) {
//     console.log("Nilai tidak sesuai")
// } else {
//     console.log("Nilai tidak sesuai")
// }

// 2. fungsi pangkat

// function perpangkatan(a, b) {
//     return a ** b;
// }
// console.log(perpangkatan(2, 2))
// console.log(perpangkatan(4, 8))

//3. Print Array
// function printArray(array_data) {
//     let stackData = array_data[0]
//     for (let index = 1; index < array_data.length; index++) {
//         stackData = stackData + ' ' + array_data[index]
//     }
//     return stackData
// }
// let arrayData = ["Muhammad", "Adrian", "Maulana"]
// console.log(printArray(arrayData))

// 4. Membuat fungsi menghitung bilang genap dan ganjil yang ada di dalam array number.
// let array_number = [10, 5, 2, 3, 20, 10];
// let Ganjil = 0;
// let Genap = 0;

// function test(array_number) {
//     for (let index in array_number) {
//         if (array_number[index] % 2 == 0) {
//             Genap++;
//         } else {
//             Ganjil++;
//         }
//     }
//     console.log("Ganjil: " + Ganjil);
//     console.log("Genap: " + Genap);
// }
// test(array_number);

// 5.Membuat fungsi menghitung bilang genap dan ganjil yang ada di dalam array number.
let array_number = [12, 10, 3, 22, 10, 5]

function test(array_number) {
    let habis_dibagi_lima = 0
    let tidak_habis_dibagi_lima = 0
    for (let index in array_number) {
        if (array_number[index] % 5 == 0) {
            habis_dibagi_lima++;
        } else {
            tidak_habis_dibagi_lima++;
        }
    }
    return { habis_dibagi_lima, tidak_habis_dibagi_lima }
}
console.log(test(array_number))

// soal 3

// Menampilkan Post yang memiliki user id === 5
// Ouputnya array of object