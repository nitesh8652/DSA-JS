let arr = [1, 2, 3, 4, 5];

let sum = 0

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        sum = sum + Math.abs(arr[i] - arr[j])
        console.log(sum);
    }
}
console.log(sum);