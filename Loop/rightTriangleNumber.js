let prompt = require("prompt-sync")();
let n = Number(prompt("Number : "))

for(let i = 1; i<=n;i++){

    for(let m=1;m<=i;m++){
        process.stdout.write(String ( m+"  " ) )
    }
    console.log(" ")
}