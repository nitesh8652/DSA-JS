let prompt = require("prompt-sync")()
let n = Number(prompt("Enter : "))

let arr = new Array(n)
for(let i = 0; i<arr.length;i++){
    arr[i] = prompt("Enter : ")
}

console.log(arr)