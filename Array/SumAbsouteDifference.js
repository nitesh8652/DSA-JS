let arr = [1, 3, 6]

let sum = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        sum += Math.abs(arr[i] - arr[j])
        // sum += arr[i] + arr[j]
    }
}
console.log(sum)
