let arr = [12, 66, 89, 63, 76, 35, 98]
let max = arr[0]
let smax
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        smax = max
        max = arr[i]
    } else if (arr[i] > smax && arr[i] != max) {
        smax = arr[i]
    }


}

console.log(smax)