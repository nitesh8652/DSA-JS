let arr = [2, 6, 3, 1, 9, 8, 5];


const half = Math.floor(arr.length / 2)
const secondHalf = arr.slice(half)
console.log(arr)

const FirstHalf = arr.slice(0, half)
const ascending = FirstHalf.sort((a, b) => a - b)
const descending = secondHalf.sort((a, b) => b - a)

const sorted = [...ascending, ...descending]
console.log(sorted)

// need to add seprator