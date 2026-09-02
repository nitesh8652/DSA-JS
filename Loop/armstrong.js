let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

let store = n
let count = 0
let fact = 0

while (n > 0) {
    // n = n % 10
    n = Math.floor(n / 10)
    count++

    while (count > 0) {
        store = store % 10
        fact = fact + store * count
        store = Math.floor(store / 10)
        console.log(fact)
    }


}
