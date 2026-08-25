let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "));


while (n > 0) {
    let num = n
    let store = n * num
    let digit = store % 10
    console.log(digit)
    let value = num % 10
    if (value == digit) {
        console.log("Yes")
    } else {
        console.log("No")
    }
    break

}