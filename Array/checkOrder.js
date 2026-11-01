let arr = [1, 2, 5, 3, 8]

for(let i = 1; i<arr.length;i++){
    if(arr[i-1]>arr[i]){
        return console.log("true")
    }
}
return console.log("false")