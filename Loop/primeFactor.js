let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))


let div = 2

while (div <= n) {
    if (n % div == 0) {
        console.log(div)
        while (n % div == 0) {
            n = n / div
        }
    }
    div++
}