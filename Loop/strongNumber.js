let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "));

let save = n
let sum = 0
let fact = 1

for (let i = 1; i <= n; i++) {
    let digit = n % 10
    n=Math.floor(n/10)

    for(i=1;digit<=i;i++){
        sum=sum*fact
    }
    if (sum === save){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

