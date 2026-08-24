let prompt = require("prompt-sync")()
let n = Number(prompt("Enter Number : "))

if (n < 0) return "No";
let square = n * n;
let tempnum = n;
let digitCount = 0;


while (tempnum > 0) {
    tempnum = Math.floor(tempnum / 10);
    digitCount++;
}


let divisor = 1;
for (let index = 0; index < digitCount; index++) {
    divisor *= 10;
}

let lastDigitsOfSquare = square % divisor;
console.log(lastDigitsOfSquare === n ? "Yes" : "No");
