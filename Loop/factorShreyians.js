let prompt = require("prompt-sync")()
let a = Number(prompt("Number "))

for(let i=1;i<=a/2;i++){
    if(a%i==0){
        console.log(i)
    }
}