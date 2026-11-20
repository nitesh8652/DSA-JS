const prompt = require('prompt-sync')();

const x = Number(prompt('Enter your number: '));
const arr = [22,45,67,32,98];
let index = -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
        index = i;
        break
    }
}

console.log(index ==-1 ? "not found" : "Found at index");
