let arr = [80 , 22, 56, 90, 9, 78, 32, 12,]
let min = arr[0]
let secondmin = 0

for (let i = 1; i < arr.length; i++) {
    //            9      
    if (arr[i] < min) {
        //22
        secondmin = min
    
        min = arr[i]
                //22 se 
    } else if (secondmin > arr[i]) {
        secondmin = arr[i]
    }
}

console.log(secondmin)