const arr = [1, 2, 1, 2, 1, 3]

const half = arr.length / 2

const firstHalf = arr.slice(0, half)
const secondHalf = arr.slice(half)
let result
console.log(firstHalf, secondHalf)
let firstSum = 0
let secondSum = 0

for (let i = 0; i < half; i++) {
    firstSum = firstSum + firstHalf[i]
    secondSum = secondSum + secondHalf[i]

}
if (firstSum > secondSum) {

    const res1 = firstSum - secondSum
    console.log("res1", res1)
    secondHalf.push(res1)
    result = secondHalf

} else if (secondSum > firstSum) {

    const res2 = secondSum - firstSum
    console.log("res2", res2)
    firstHalf.push(res2)
    result = firstHalf

} else {
    
    const result = [0]
}

console.log(result)