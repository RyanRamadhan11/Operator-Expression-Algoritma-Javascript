const fsw6 = [
    {
        name: 'dhewan',
        hobby: 'main games',
    },
    {
        name: 'rayhendra',
        hobby: 'gapunya hobby',
    },
    {
        name: 'wahyu',
        hobby: 'badminton',
    },
    {
        name: 'magdalisa',
        hobby: 'nonton drakor',
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

function sortArrObj(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].name > arr[j + 1].name) {
                let penyimpanan = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = penyimpanan
            }
        }
    }
    return arr
}

const hasil = sortArrObj(fsw6)
console.log(hasil)

// dh m ad da r w