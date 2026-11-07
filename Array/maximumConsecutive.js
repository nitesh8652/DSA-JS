// Lagaatar 1s ki sabse lambi streak kitni hai? output = 3
let arr = [1, 1, 1, 0, 1]

let currentCount = 0
let maxCount = 0

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 1){
        currentCount ++
        maxCount = Math.max(currentCount, maxCount )
    }else{
        currentCount = 0
    }

}

console.log(maxCount)

