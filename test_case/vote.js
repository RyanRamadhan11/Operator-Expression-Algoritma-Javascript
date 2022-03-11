
const fsw6 = [
    {
        name: 'adrian',
    },
    {
        name: 'amos',
    },
    {
        name: 'arya',
    },
    {
        name: 'daniel',
    },
    {
        name: 'dewan',
    },
    {
        name: 'diana',
    },
    {
        name: 'edka',
    },
    {
        name: 'diandra',
    },
    {
        name: 'difa',
    },
    {
        name: 'diyah',
    },
    {
        name: 'elin',
    },
    {
        name: 'ikadani',
    },
    {
        name: 'ilyas',
    },
    {
        name: 'magdalisa',
    },
    {
        name: 'edka',
    },
    {
        name: 'bintang',
    },
    {
        name: 'fadila',
    },
    {
        name: 'rizki',
    },
    {
        name: 'arya',
    },
    {
        name: 'rahma',
    },
    {
        name: 'silva',
    },
    {
        name: 'wahyu',
    },
    {
        name: 'samuel',
    },
]

for (let i = 0; i < fsw6.length; i++){
   fsw6[i].id = i + 1;
  
}

console.log(fsw6)

const voting = []

function vote (id, ukrainaRusia){
   voting.push({id, ukrainaRusia})
}

vote(1, 'ukraina')
vote(2, 'rusia')
vote(3, 'rusia')
vote(4, 'rusia')
vote(5, 'rusia')
vote(6, 'rusia')
vote(7, 'rusia')
vote(8, 'rusia')
vote(9, 'ukraina')
vote(10, 'ukraina')
vote(11, 'ukraina')
vote(12, 'rusia')
vote(13, 'rusia')
vote(14, 'rusia')
vote(15, 'rusia')
vote(18, 'rusia')
vote(19, 'rusia')
vote(20, 'rusia')
vote(21, 'rusia')
vote(22, 'ukraina')
vote(23, 'rusia')


console.log(voting)

function checkWinner (arr){
   let ukraina = 0
   let rusia = 0
   let netral = 0
  
   for(let i = 0; i < arr.length; i++){
     if(arr[i].ukrainaRusia === 'ukraina'){
       ukraina++    
     }else if (arr[i].ukrainaRusia === 'rusia'){
       rusia++
     }else{
       netral++
     }
   }  
  return ukraina > rusia ? 'ukrainamenang' : 'rusiamenang'
  //if(netral > rusia && netral > ukraina) {
  //  return 'gada yang menang'
  //}else if (ukraina > rusia){
  //  return 'ukraina yang menang'
  //}else{
  //   return 'rusia yang menang'
  //}

  //return lain
  //if(netral > rusia && netral > ukraina) {
   // return {
   //   pemenang: 'tidak ada', 
   //   hasilVoting: {ukraina, rusia, netral}
   // }
  //}else if (ukraina > rusia){
  //   return {pemenang: 'ukraina', hasilVoting : { ukraina, rusia, netral}}
  //}else{
//return {pemenang: 'rusia', hasilVoting : { ukraina, rusia, netral}}
  //}

  
}
console.log('')
console.log(checkWinner(voting))

function checkVoters(value){
    let voterValue = []
   for(let i = 0; i < voting.length; i++){
      if (voting[i].ukrainaRusia === value){
        voterValue.push(voting[i])  
      }         
    }
   //console.log(voterValue) 
   let hasil = []
   for(let i = 0; i < voterValue.length; i++){
     for(let j = 0; j < fsw6.length; j++){
      if (voterValue[i].id === fsw6[j].id){
        hasil.push({
          pwmilih: fsw6[j],
          memilih: voterValue[i].ukrainaRusia,        
        })
         break
      }         
     }
   }
  console.log(hasil) 
}
checkVoters('ukraina') 

function checkVoters(value){
    const voterValue = voting.filter((item) => 
    item.ukrainaRusia === value ) 
    let hasil = []
        for(let i = 0; i < voterValue.length; i++){
        for(let j = 0; j < fsw6.length; j++){
         if (voterValue[i].id === fsw6[j].id){
           hasil.push({
             ...fsw6[j],
             memilih: voterValue[i].ukrainaRusia,        
           })
            break
         }         
        }
      }
     console.log(hasil) 
  }
  checkVoters('ukraina')   