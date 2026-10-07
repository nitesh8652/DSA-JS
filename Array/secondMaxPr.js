let prompt = require("prompt-sync")();
let line = prompt("Numbers : ");

let arr = line.trim().split(/\s+/);

let max = arr[0]
let smax 

for(let i =1;i<arr.length;i++){
    if(arr[i]>max){
        smax =max
        max = arr[i]
    }else if (arr[i]>smax && smax ==! max){
        smax = arr[i]
    }
}

console.log(smax)