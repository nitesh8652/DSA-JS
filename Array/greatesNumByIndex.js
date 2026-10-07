let arr = [10, 49, 38, 92, 65]

let max = arr[0]
let idx = 0


for (let i = 1; i < arr.length; i++) {

    if (max < arr[i]) {
        max = arr[i]
        idx = i

    }


}
console.log(max,idx)