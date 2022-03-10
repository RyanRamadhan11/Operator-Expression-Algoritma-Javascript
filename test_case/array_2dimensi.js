// dadu punya 6 mata (1,2,3,4,5,6)
// kita punya 2 dadu
// buat semua kemungkinan dadu dalam array
// contoh output =>> [[1,1], [1,2],....]

// inisialisasi tempat penampungan semua kemungkinan
let finalArray = []
// dadu pertama
for (let i = 1; i <= 6; i++) {
    //   dadu kedua
    let connectOneTwo = [] //tempat penyimpanan sementara
    for (let j = 1; j <= 6; j++) {
        connectOneTwo.push([i, j])
    }
    // finalArray = [...finalArray, ...connectOneTwo]
    finalArray.push(...connectOneTwo)
    // finalArray.push(connectOneTwo)
}

const sebuahArray = ['a', 'b', 'c']
const arrayPenampung = [...sebuahArray]
console.log(arrayPenampung)

// DADU1 1
// DADU2 1
// DADU2 2
// DADU2 3
// DADU2 4
//... DADU2 6
// DADU1 2
// DADU2 1
// DADU2 1
// DADU2 2
// DADU2 3
// DADU2 4
//... DADU2 6
//... DADU1 6
// DADU2 1
// DADU2 1
// DADU2 2
// DADU2 3
// DADU2 4
//... DADU2 6