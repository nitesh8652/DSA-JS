let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

let sum = 0
let num = n
let dividen
while (n > 0) {
    let digit = n % 10
    sum = sum + digit
    n = Math.floor(n / 10)
}
dividen = num % sum
console.log(dividen == 0 ? "Hashed Number" : "Not Hashed")

