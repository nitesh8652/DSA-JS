let arr = [3, 8, 5, 10]
let sum = 0
let count = 0

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
    if (arr[i] % 2 == 0) {
        count++
    }
}

console.log(sum,count)