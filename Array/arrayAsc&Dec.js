let arr = [2, 6, 3, 1, 9, 8, 5];

const half = Math.floor(arr.length / 2)
const firstHalf = arr.slice(0, half).sort((a, b) => a - b)
const secondHalf = arr.slice(half).sort((a, b) => b - a)

const resuly = [...firstHalf
    , ...secondHalf
]

console.log(resuly.join(" "))