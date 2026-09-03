let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

let store = n
let count = 0
let tr = 0
while (n > 0) {
    // n = n % 10
    n = Math.floor(n / 10)
    count++
    
}

for (let m = 0 ; count>=m ; m++) {
    let digit =  store % 10
    tr = tr + digit**count
    store=Math.floor(store/10)

    
}



console.log(tr)