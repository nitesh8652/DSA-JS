//  npm install --no-save prompt-sync
let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number"))

for(let i = 1 ; i<=n;i++){
    console.log(i)
}