let prompt = require("prompt-sync")()
let a = Number(prompt("NumA "))
let b = Number(prompt("NumA "))


let evenSum = 0
let oddSum = 0

if (a > b) {
    let temp = a
    a = b
    b = temp
}
for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        evenSum += i
    } else {
        oddSum += i
    }

}
console.log('even', evenSum)
console.log("odd", oddSum)