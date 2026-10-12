let arr = [1,2,3,7,5]
let target = 12
let count = 0

for(let i =1;i<arr.length;i++){
    let sum = 0
    for(j=i;j<arr.length;j++){
        sum = sum +arr[j]
        if(sum == target) count ++
    }
}

console.log(count)