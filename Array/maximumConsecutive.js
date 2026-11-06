// Lagaatar 1s ki sabse lambi streak kitni hai? output = 3
let arr = [1, 1, 1, 0, 1]

let currentCount = 0
let maxCount = 0

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 1){
        currentCount ++
        maxCount ++
    }
    
    if(arr[i] === 0){
        currentCount = 0
    }

}

if(maxCount>currentCount){
    console.log(maxCount,"maxCount")
}else if(currentCount>maxCount){
    console.log(currentCount,"currentCount")

}
