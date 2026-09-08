let arr = [45,67,89,26,72,90]

let max = arr[0]

for(let i = 1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}

console.log(max)