const util = require('util')

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

// let hasil = []
// for (let i = 0; i < kendaraan.length; i++) {
//     for (let j = 0; j < orang.length; j++) {
//         if (kendaraan[i].pemilik === orang[j].id) {
//             hasil.push({
//                 pemilik: orang[j].nama,
//                 kendaraan: {
//                     transmisi: kendaraan[i].transmisi,
//                     tahun: kendaraan[i].tahun,
//                     type: kendaraan[i].type,
//                 },
//             })
//         }
//     }
// }
// console.log(hasil)

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

// soal no 1
function merge(arrKendaraan, arrOrang) {
    const result = []
    for (let i = 0; i < arrKendaraan.length; i++) {
        for (let j = 0; j < arrOrang.length; j++) {
            if (arrKendaraan[i].pemilik === arrOrang[j].id) {
                result.push({
                    pemilik: arrOrang[j].nama,
                    kendaraan: {
                        transmisi: arrKendaraan[i].transmisi,
                        tahun: arrKendaraan[i].tahun,
                        type: arrKendaraan[i].type,
                    },
                })
            }
        }
    }
    return result
}

// console.log(merge(kendaraan, orang))

// soal no 2
function searchByYear(tahun, arrKendaraan, arrOrang) {
    // const data = merge(arrKendaraan, arrOrang)
    let hasil = []
    for (let i = 0; i < arrKendaraan.length; i++) {
        if (arrKendaraan[i].tahun === tahun) {
            hasil.push(arrKendaraan[i])
        }
    }
    // console.log(hasil)
    return merge(hasil, arrOrang)
}

// console.log(searchByYear(2017, kendaraan, orang))

// soal no 3 bikin function buat nge sort hasil dari function 1  berdasarkan nama pemilik

// function name(params) {

// }

// const data = merge(kendaraan, orang)

// function sortingnomorsatu(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].pemilik > arr[j].pemilik) {
//                 const penampung = arr[j]
//                 arr[j] = arr[i]
//                 arr[i] = penampung
//             }
//         }
//     }
//     return arr
// }

// console.log(sortingnomorsatu(data))

function nomorempat(arrKendaraan, arrOrang) {
    const hasil = []
    for (let i = 0; i < arrOrang.length; i++) {
        const orang = {
            pemilik: arrOrang[i].nama,
            kendaraan: [],
        }
        for (let j = 0; j < arrKendaraan.length; j++) {
            if (arrOrang[i].id == arrKendaraan[j].pemilik) {
                orang.kendaraan.push({
                    transmisi: arrKendaraan[j].transmisi,
                    tahun: arrKendaraan[j].tahun,
                    type: arrKendaraan[j].type,
                })
            }
        }
        hasil.push(orang)
    }
    return hasil
}

console.log(
    util.inspect(nomorempat(kendaraan, orang), {
        showHidden: false,
        depth: null,
        colors: true,
    })
)