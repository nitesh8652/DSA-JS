let arr = [3, -1, 0, 5, -7]

let positiveCount = 0
let negativeCount = 0
let zeroCount = 0


for (let i = 0; i < arr.length; i++) {
    const x = arr[i]
    if (x > 0) {
        positiveCount++
    } else if (x == 0) {
        zeroCount++
    } else if (x < 0) {
        negativeCount++
    }
}

console.log("Positive numbers:", positiveCount)
console.log("Negative numbers:", negativeCount)
console.log("Zeros:", zeroCount)