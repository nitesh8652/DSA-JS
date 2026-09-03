let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

    let sum = 0
    let multiply = n * n
    let original = n

    while (multiply > 0) {

        let digit = multiply % 10
        sum = sum + digit

        multiply = Math.floor(multiply / 10)
    }

    if (sum == original) {
        console.log("Yes")
    } else {
        console.log("No")
    }
