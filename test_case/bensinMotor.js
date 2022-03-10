const kendaraan = [
    {
        pemilik: '1',
        transmisi: 'matic',
        tahun: 2017,
        type: 'mobil',
    },
    {
        pemilik: '2',
        transmisi: 'manual',
        tahun: 2015,
        type: 'mobil',
    },
    {
        pemilik: '3',
        transmisi: 'matic',
        tahun: 2020,
        type: 'motor',
    },
    {
        pemilik: '4',
        transmisi: 'matic',
        tahun: 2017,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '4',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '5',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
    {
        pemilik: '1',
        transmisi: 'manual',
        tahun: 2019,
        type: 'motor',
    },
]

const orang = [
    {
        nama: 'ikhadany',
        id: '2',
        domisili: 'purwokerto',
    },
    {
        nama: 'rahma',
        id: '1',
        domisili: 'depok',
    },
    {
        nama: 'amos',
        id: '4',
        domisili: 'jakarta barat',
    },
    {
        nama: 'diyah',
        id: '3',
        domisili: 'rembang',
    },
    {
        nama: 'arya',
        id: '5',
        domisili: 'jakarta',
    },
    {
        nama: 'difah',
        id: '7',
        domisili: 'jakarta',
    },
    {
        nama: 'malay',
        id: '6',
        domisili: 'jakarta',
    },
]

// const hasil = [
//     {
//         pemilik: 'rahma',
//         kendaraan: {
//             transmisi: 'matic',
//             tahun: 2017,
//             type: 'mobil',
//         },
//     },
// ]

let hasil = []
for (let i = 0; i < kendaraan.length; i++) {
    for (let j = 0; j < orang.length; j++) {
        if (kendaraan[i].pemilik === orang[j].id) {
            hasil.push({
                pemilik: orang[j].nama,
                kendaraan: {
                    transmisi: kendaraan[i].transmisi,
                    tahun: kendaraan[i].tahun,
                    type: kendaraan[i].type,
                },
            })
        }
    }
}
console.log(hasil)

//jawaban no 1 bikin function
function sort(kendaraan, orang) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
        for (let j = 0; j < orang.length; j++) {
            if (kendaraan[i].pemilik === orang[j].id) {
                hasil.push({
                    pemilik: orang[j].nama,
                    kendaraan: {
                        transmisi: kendaraan[i].transmisi,
                        tahun: kendaraan[i].tahun,
                        type: kendaraan[i].type,
                    },
                })
            }
        }
    }
    return hasil
}

const hasil = sort(kendaraan, orang)
console.log(hasil)

//jawaban no 2 bikin function buat nyari mobil berdasarkan tahun
function sort(kendaraan, orang) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
        for (let j = 0; j < orang.length; j++) {
            if (kendaraan[i].pemilik === orang[j].id && kendaraan[i].tahun === 2019) {
                hasil.push({
                    pemilik: orang[j].nama,
                    kendaraan: {
                        transmisi: kendaraan[i].transmisi,
                        tahun: kendaraan[i].tahun,
                        type: kendaraan[i].type,
                    },
                })
            }
        }
    }
    return hasil
}
const hasil = sort(kendaraan, orang)
console.log(hasil)


//no2 cara lain
function searchByYear(tahun, kendaraan, orang) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
        if (kendaraan[i].tahun === tahun) {
                hasil.push(kendaraan[i])
        }
    }
    return sort(hasil, orang)
}
console.log(searchByYear(2017, kendaraan, orang))

//no2 cara lain-
function searchByYear(tahun) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
          if (kendaraan[i].tahun === tahun) {
                hasil.push(kendaraan[i])
            }
    }
    return hasil
}
console.log(searchByYear(2017))

//jawaban no 3 bikin function nama pake method.reverse
function sort(kendaraan, orang) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
        for (let j = 0; j < orang.length; j++) {
            if (kendaraan[i].pemilik === orang[j].id) {
                hasil.push({
                    pemilik: orang[j].nama,
                    kendaraan: {
                        transmisi: kendaraan[i].transmisi,
                        tahun: kendaraan[i].tahun,
                        type: kendaraan[i].type,
                    },
                })
            }
        }
    }
    return hasil
}

const hasil = sort(kendaraan, orang)
hasil.reverse();
console.log(hasil)

//no3
function sortnomorsatu(arr){
    for(let i = 0; i < arr.length - 1; i++){
      for(let j = i + 1; j < arr.length; j++){
         if (arr[i].pemilik > arr[j].pemilik) {
           let penyimpanan = arr[j] 
               arr[j] = arr[i]
               arr[i] = penyimpanan 
         }
      }  
    }
   return arr
 }
 
 const data = merge(kendaraan, orang)
 console.log(sortnomorsatu(data))

//no4
const data = merge(kendaraan, orang)
function sortnomorsatu(urut){
   for(let i = 0; i < urut.length - 1; i++){
     for(let j = i + 1; j < urut.length; j++){
        if (urut[i].pemilik > urut[j].pemilik) {
          let penyimpanan = urut[j] 
              urut[j] = urut[i]
              urut[i] = penyimpanan 
        }
     }  
   }
  return urut
}

console.log(sortnomorsatu(data))


//jawaban no 4 berdasarkan nama pemilik
function sort(kendaraan, orang, nama) {
    let hasil = []
    for (let i = 0; i < kendaraan.length; i++) {
        for (let j = 0; j < orang.length; j++) {
            if (kendaraan[i].pemilik === orang[j].id && orang[j].nama === nama) {
                hasil.push({
                    pemilik: orang[j].nama,
                    kendaraan: {
                        transmisi: kendaraan[i].transmisi,
                        tahun: kendaraan[i].tahun,
                        type: kendaraan[i].type,
                    },
                })
            }
        }
    }
    return hasil
}

const hasil = sort(kendaraan, orang, nama);
console.log(hasil);

//no4
function nomempat(arrKendaraan, arrOrang){
    const hasil = []
     for(let i = 0; i < arrOrang.length; i++){
        const orang = {
          pemilik: arrOrang[i].nama,
          kendaraan: [],
        }
        for (let j = 0; j < arrKendaraan.length; j++){
          if(arrOrang[i].id == arrKendaraan[j].pemilik){
            orang.kendaraan.push(arrKendaraan[j])
          }
       }
       hasil.push(orang)
     }  
     return hasil
  }
  console.log(nomempat(kendaraan, orang))


// soal no 1
// yang kita kerjain tadi dibuat jadi function
// soal no 2
// bikin function buat nyari mobil berdasarkan tahun
// soal no 3
// bikin function buat nge sort hasil dari function 1  berdasarkan nama pemilik
// soal no 4
// bikin function buat untuk menghasilkan data sperti dibawah ini

// const hasil2 = [
//     {
//         pemilik: 'rahma',
//         kendaraan: [
//             { transmisi: 'matic', tahun: 2017, type: 'mobil' },
//             { transmisi: 'matic', tahun: 2017, type: 'mobil' },
//         ],
//     },
// ]