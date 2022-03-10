// asdasd

var kelas = 'FSW-6'
const nama = 'Dhewan'
let umur = '18 tahun'

var kelas = 'FSW-7'
// const nama = 'Wahyu' // contoh redeclare const
// let umur = '19 tahun' // contoh redeclare let
kelas = 'FSW-8' //contoh re-assign kelas
// nama = 'Amos' // contoh re-assign const
umur = '16 tahun' //contoh re-assgin let
if (500 > 100) {
    var kelas = 'FSW-9'
    if (true) {
        var kelas = 'FSW-10'
    }
    let umur = '22 tahun' //cobain block scope let
    console.log(umur, '===ini umur di block scope==============')
    const nama = 'Samuel' //cobain block scope let
    console.log(nama, '===ini nama di block scope==============')
}

console.log(kelas) // contoh redeclare var
console.log(nama, '=====ini nama diluar block scope==')
console.log(umur)
