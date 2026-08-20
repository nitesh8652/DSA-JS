let prompt = require("prompt-sync")()
let n = Number(prompt("Number "))


    for(let i = 2 ; i< n;i++){
        if(n%i == 0){
          return  console.log("Not Prime")
        }
    }
    console.log('Prime')
