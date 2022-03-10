//lat8
const fsw6 = [
  {
    name: 'dhewan',
    hobby: 'main games',
  },
  {
    name: 'rayhendra',
    hobby: 'gapunya',
  },
  {
    name: 'wahyu',
    hobby: 'badminton',
  },
  {
    name: 'magdalisa',
    hobby: 'nonton',
  },
  {
    name: 'adrian',
    hobby: 'main games',
  },
  {
    name: 'daniel',
    hobby: 'musik',
  },
]
function sortArrObj(arr){
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - 1; j++){
      if (arr[j].name > arr[j + 1].name){
        let penyimpanan =  arr[j + 1]
        arr[j] = arr[j + 1]
        arr[j + 1] = penyimpanan
      }
    }
  }
  return arr
}

const hasil = sortArrObj(fsw6)
console.log(hasil)

console.log('')

//lat7
const fsw6 = [
  {
    name: 'dhewan',
    hobby: 'main games',
  },
  {
    name: 'rayhendra',
    hobby: 'gapunya',
  },
  {
    name: 'wahyu',
    hobby: 'badminton',
  },
  {
    name: 'magdalisa',
    hobby: 'nonton',
  },
  {
    name: 'adrian',
    hobby: 'main games',
  },
  {
    name: 'daniel',
    hobby: 'musik',
  },
]
function sortArrObj(arr){
  for (let i = 0; i < arr.length - 1; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i].name > arr[j].name){
        let penyimpanan =  arr[i]
        arr[i] = arr[j]
        arr[j] = penyimpanan
      }
    }
  }
  return arr
}

const hasil = sortArrObj(fsw6)
console.log(hasil)

console.log('')

//lat6
const fsw6 = [
  {
    name: 'dhewan',
    hobby: 'main games',
  },
  {
    name: 'rayhendra',
    hobby: 'gapunya',
  },
  {
    name: 'wahyu',
    hobby: 'badminton',
  },
  {
    name: 'magdalisa',
    hobby: 'nonton',
  },
  {
    name: 'adrian',
    hobby: 'main games',
  },
  {
    name: 'daniel',
    hobby: 'musik',
  },
]

for (let i = 0; i < fsw6.length - 1; i++){
    for (let j = i+1; j < fsw6.length; j++){
      if (fsw6[i].name > fsw6[j].name){
        let penyimpanan =  fsw6[i]
        fsw6[i] = fsw6[j]
        fsw6[j] = penyimpanan
      }
    }
}
  
console.log(fsw6)
console.log('')


//lat5
//contoh4
const names = ['edka', 'malay', 'difa', 'arya', 'adrian', 'bintang']

function sort(arr){
    for (let i = 0; i < arr.length - 1; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        let penyimpanan = arr[i]
        arr[i] = arr[j]
        arr[j] = penyimpanan
      }
    }
  }
  return arr
}

// Only change code below this line
const myArray = [];
myArray.push(['push', 6], ['bebas', 3])
console.log(myArray)

// Only change code below this line
const myArray = [];
myArray.push('ilyas')
myArray.push(2)
console.log(myArray)



//contoh4
const names = ['edka', 'malay', 'difa', 'arya', 'adrian', 'bintang']

for (let i = 0; i < names.length - 1; i++){
  for (let j = i+1; j < names.length; j++){
    if (names[i] > names[j]){
      let penyimpanan = names[i]
      names[i] = names[j]
      names[j] = penyimpanan
    }
  }
}

console.log(names)

//contoh3
let names = ['sam','bint','amos','magda']
let names2 = ['adri','diya','fad']
names = [...names, ...names2]
console.log(names);


//contoh1
let desserts = ['cake', 'cookie', 'donut'];
let desserts1 = ['icecream', 'flan', 'frozen ', ...desserts];
console.log(...desserts1);
//Appending baked_desserts after flan
let desserts2 = ['icecream', ...desserts, 'frozen yoghurt'];
console.log(desserts2);


//contoh2
//const data= ['assd','das','sasa']
//console.log(...data)
let array1 = ['h', 'e', 'l', 'l', 'o'];
let array2 = [...array1]

console.log(array2)
//dadu pertama
let finalArray = []
for (let i = 1; i <= 6; i++){
    //dadu kedua
    let connectOneTwo = []
    for (let j = 1; j <= 6; j++){
      connectOneTwo.push([i,j])
    }
    finalArray = [...finalArray, ...connectOneTwo]
}
   console.log(finalArray) 

