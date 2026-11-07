// Kya koi do alag elements hain jinka sum target ke barabar ho?

function hasPair(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] + arr[j] === x) {
                console.log("True", i, j);
                return true;
            }
        }
    }
    return false;
}

let arr = [2, 7, 11, 15];
let x = 9;

console.log(hasPair(arr, x));