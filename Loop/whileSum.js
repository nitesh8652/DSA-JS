let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "));

let sum = 0
let digit = 0

while (n > 0) {

    digit = n % 10
    sum = sum + digit
    n = Math.floor(n / 10)

}
console.log(sum)