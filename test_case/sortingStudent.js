const names = ['edka', 'malay', 'difa', 'arya', 'adrian', 'bintang']

function sort(arr) {
    // const arr = [...arr]
    for (let i = 0; i < arr.length - 1; i++) {
        // console.log('========INI IIIIIIIIIII==============', i)
        for (let j = i + 1; j < arr.length; j++) {
            // console.log('+++++++++++++INI JJJJJJJJJ+++++++++++ ',)
            if (arr[i] > arr[j]) {
                let penyimpanan = arr[i] //edka
                arr[i] = arr[j] // malay
                arr[j] = penyimpanan //edka
            }
        }
    }
    return arr
}

const sortedNames = sort(names)
console.log(sortedNames)

// ad ar b d e m