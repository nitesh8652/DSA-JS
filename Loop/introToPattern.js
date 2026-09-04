let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

for(let i = 1; i<=n ;i++){
    for(k=1;k<=n;k++){
        process.stdout.write("*");
        
    }
    console.log("*")
}