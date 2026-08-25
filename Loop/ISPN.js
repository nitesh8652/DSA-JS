let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "));
// 0306406152

let copy = n
let count = 0
let place = 10
let num = 0

while (n > 0) {
    count++
    n = Math.floor(n / 10)
}
console.log(count)

if (count != 10) {
    return "Enter 10 digits"
} else {
    
    let digit = 0
    while (copy > 0) {

        let dk = copy %  10
        digit = digit + (dk * count)
        count--
        copy = Math.floor(copy/10)

    }
console.log(digit %11==0 ? "Valid ISBM":"INVALID!!!!!!!")
}
