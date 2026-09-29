let arr = [ 22, 56, 90, 9, 78, 32, 12,]
let min = arr[0]
let secondmin = 0

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        secondmin = min
        min = arr[i]
    } else if (secondmin > arr[i]) {
        secondmin = arr[i]
    }
}

console.log(secondmin)