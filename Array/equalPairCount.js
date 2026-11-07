//Kitne pairs (i, j) hain jahan i < j aur arr[i] == arr[j]?
let arr = [1, 2, 1, 2, 1]

let equal = 0

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < i; j++) {
       
        if (arr[i] == arr[j]) {
            equal++
        }
    }
}
console.log(equal)

