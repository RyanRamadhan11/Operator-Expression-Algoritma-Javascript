let alat_musik = []

alat_musik.push('bass')
alat_musik.push('gitar')
alat_musik.push('drum')
// alat_musik.sort()
// console.log(alat_musik)

// console.log(alat_musik[2])

const siswa = {
    nama: 'samuel',
    umur: 22,
    jurusan: 'it',
}

siswa.nama = 'amos'
siswa.hoby = 'nogding'
// console.log(siswa)

// let nama = 'budi'
// console.log(siswa.jurusan)

let var1 = 'nama'
let var2 = 'name'
let var3 = 'nami'
let var4 = 'nami'
let var5 = 10
let var6 = 15
let var7 = 15
// if (var6 + var7 == var5 * 3) {
//     console.log('true')
// } else {
//     console.log('false')
// }
// const hasilPenjumlahan = var5++
var1 += ' saya adalah samuel'
var1 = var1 + ' saya adalah samuel'
// console.log(var1)

const newarr = ['samuel', 'diyah', 'ilyas', 'adrian', 'difa']

// console.log('samuel' in newarr)

const newObj = {
    name: 'siapa',
    age: 12,
}

// delete newObj.age

const angka_baru = 2 < 3 ? 5 : 7

const [apaaja, iniitu, namaorang] = [
    'samuel',
    'diyah',
    'ilyas',
    'adrian',
    'difa',
]

const person = {
    nama: 'siapa aja',
    kelas: 'fsw6',
    jurusan: 'IT',
    semester: 7,
}
// const apaaja = newarr[2]
const { kelas, jurusan, nama } = person
// console.log(jurusan, kelas, nama)

var value1 = 10
var value2 = 13
var value3 = 20

// console.log(value1 < value3 ? value2 : value3)
// value false by default => 0, false, undefined, null
// if (0) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log('string' || 3 > 2 || 'ini adalah value')

const gebetan = {
    name: 'siti',
    isOnline: false,
    kampus: 'itb',
}

// console.log('saya ${gebetan.name} gebetan ')
// if (gebetan.kampus === 'ui') {
//     console.log(`if ${gebetan.name} adalah anak ${gebetan.kampus}`)
// } else if (gebetan.kampus === 'itb') {
//     console.log(`else if ${gebetan.name} adalah anak ${gebetan.kampus}`)
// } else if (gebetan.kampus === 'ugm') {
//     console.log(`else if ke 2 ${gebetan.name} adalah anak ${gebetan.kampus}`)
// } else {
//     console.log(`else ${gebetan.name} adalah anak ${gebetan.kampus}`)
// }

// switch (gebetan.kampus) {
//     case 'pu':
//         console.log(`case itb ${gebetan.name} adalah anak ${gebetan.kampus}`)
//         break
//     case 'ugm':
//         console.log(`case itb ${gebetan.name} adalah anak ${gebetan.kampus}`)
//         break
//     case 'ui':
//         console.log(`case itb ${gebetan.name} adalah anak ${gebetan.kampus}`)
//         break
//     default:
//         console.log(
//             `default case ${gebetan.name} adalah anak ${gebetan.kampus}`
//         )
//         break
// }

// const data = ['daniel', 'ilyas', 'wahyu', 'magdalisa', 'arya']

const fsw6 = [
    {
        name: 'ikadhanny',
        hobby: 'main gitar',
    },
    {
        name: 'dhaniel',
        hobby: 'main bola',
    },
    {
        name: 'ryan',
        hobby: 'main saxophone',
    },
    {
        name: 'arya',
        hobby: 'main gitar',
    },
    {
        name: 'diyah',
        hobby: 'main bola',
    },
]
const hobyBola = getHobyBola(fsw6)
console.log(hobyBola)

function getHobyBola(komponen) {
    const newArr = []
    for (let i = 0; i < komponen.length; i++) {
        if (komponen[i].hobby === 'main bola') {
            newArr.push(komponen[i])
        }
    }
    return newArr
}

// const studentHobyBola = []
// console.log(studentHobyBola)
// for (let i = 0; i < fsw6.length; i++) {
//     if (fsw6[i].hobby === 'main bola') {
//         // console.log(fsw6[i])
//         studentHobyBola.push(fsw6[i])
//     }
// }
// console.log(studentHobyBola)
