let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "));

let num=n

while(n>0){
let digit = n%10
while(digit>0){
    console.log(digit)
}
n = Math.floor(n/10)
}