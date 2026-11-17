let arr = [2, 1, 5, 1, 3, 2]

let sum = 0


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        sum += arr[i] + arr[j]
    }
}

console.log(sum)