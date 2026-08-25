let prompt = require("prompt-sync")();

let a = Number(prompt("Number A: "));
let b = Number(prompt("Number B: "));

let power = 1;

for (let i = 1; i <= b; i++) {
    power = power * a;
}

console.log(power);