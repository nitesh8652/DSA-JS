arr = [1, 2, 3, 4, 5]
const n = arr.length
const result = new Array(n)

result[0] = arr[0] * arr[1]
for (let i = 1; i < arr.length; i++) {
    result[i] = arr[i - 1] * arr[i + 1]
}

result[n-1] = arr[n-1] * arr[n-2]
console.log(result)