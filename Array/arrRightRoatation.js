arr = [1, 2, 3, 4, 5]

let temp = arr[arr.length - 1]

for (let i = 1; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - i - 1]
        //5- 1                     5-1-1
    //arr[4]            ===        arr[3]
}
arr[0] = temp

console.log(arr)