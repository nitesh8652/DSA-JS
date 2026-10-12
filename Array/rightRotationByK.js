arr = [1, 2, 3, 4, 5]
k = 3

for (let j = 1; j <= k; j++) {
    let temp = arr[arr.length - 1]
    for (let i = 1; i < arr.length; i++) {
        arr[arr.length - i] = arr[arr.length - i - 1]
    }
    arr[0] = temp

}
console.log(arr)