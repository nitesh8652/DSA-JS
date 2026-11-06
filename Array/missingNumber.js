let arr = [1, 2, 4, 5]

let n = arr.length

let total = (n + 1) * (n + 2) / 2

for (let i = 0; i < n; i++) {
    total = total - arr[i]
}
console.log(total) 