const prompt = require('prompt-sync')();

const x = Number(prompt('Enter your number: '));
const arr = [2, 5, 7, 9, 22, 45, 67, 95];

let start = 0, end = arr.length - 1, index = -1

while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] == x) {
        index = mid
        break
    } else if (arr[mid] < x) {
        start = mid + 1
    } else {
        end = mid - 1
    }
}

if (index == -1) {
    console.log("not found")
}
else {
    console.log("element find at index", index)
}