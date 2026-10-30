let arr = [5,5,3]

let max = arr[0]
let sceondMax = -Infinity
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        sceondMax = max
        max = arr[i]
    } else if (arr[i] > sceondMax && arr[i] !== max) {
        sceondMax = arr[i]
    }
}

console.log(sceondMax)