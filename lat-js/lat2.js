const names = ['edka','rahma','amos','diyah','silva']

for(let a= names.length -2; a >= 1; a -= 2){
  console.log( names[a])
}
console.log("")
for(let a = 1; a < names.length;  a += 2){
  console.log(names[a])
} 
console.log("")
for(let a = 0; a <= names.length;  a += 2){
 console.log(names[a])
}
console.log("")


//let index = 0
//while (index < names.length){
//    console.log(`nama siswa ${index + 1} adalah ${names[index]}`)
//    index++
//}

//console.log("")
//let index = names.length -1
//while (index >=0){
//    console.log(`nama siswa ${index + 1} adalah ${names[index]}`)
//   index--
//}

console.log("")
let index = names.length - 1
do {
   console.log(`nama siswa ${index + 1} adalah ${names[index]}`)
   index--
} while (index >= 0)


