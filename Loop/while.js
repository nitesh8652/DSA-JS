let prompt = require("prompt-sync")();

let n = Number(prompt("Number : "));
let rev = 0;

while (n > 0) {
    let num = n % 10;

    rev = rev * 10 + num;

    n = Math.floor(n / 10);

}
console.log(rev);