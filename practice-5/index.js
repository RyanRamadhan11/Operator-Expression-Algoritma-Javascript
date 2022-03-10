// Soal 1
// Latihan membuat minimal 5 fungsi untuk operasi aritmatika & Logika
// Catatan : Gunakan Strict Perbandingan
// Jawaban :

// pertama (arithmetic):
const a = 2;
const b = 2;

console.log(a === b) // harusnya true

// kedua (arithmetic):
const c = 2;
const d = '2';

console.log(c === d) // harusnya false

// ketiga :
console.log(true || false) // true soalnya or/atau

// keempat :
console.log(true && false) // harusnya false

// kelima :
let y = 70;
let z = 30;

if (y - z === 40) {
    console.log("bener 70-30 = 40")
}

// Soal 2
// Latihan membuat fungsi untuk menampilkan dalam suatu array berdasarkan index
// let ArrayData = [10, 15, 25, 33, 20, 21, 27, 18]
// Jawaban :

let ArrayData = [10, 15, 25, 33, 20, 21, 27, 18]

console.log(ArrayData[2])





// Soal 3
// Latihan membuat fungsi untuk menampilkan value dalam suatu object berdasarkan key Object
let ObjectData = {
        nama: "Reka Alamsyah",
        kelas: "FSW-2",
        alamat: "Bandung",
        asal_sekolah: {
            sd: "Rancaekek",
            smp: "Bandung",
            sma: "Antapani"
        }
    }
    // Jawaban :

console.log(ObjectData.nama)