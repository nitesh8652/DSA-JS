let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

let sum = 0;
let store = n

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
     
        if (i === n) continue
        sum = sum + i
    }

}
console.log(sum)
if (sum >= store) {
    console.log("Abundant")
} else {
    console.log("Not Abundant")
}
