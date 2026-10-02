let prompt = require("prompt-sync")();
let n = Number(prompt("n : "));
let line = prompt("Numbers : ");

// Split on any run of spaces so extra spaces don't create empty items.
// Result: ["1", "2", "3", "4", "5"] (strings)
    let arr = line.trim().split(/\s+/);

// Convert each string to a real number: [1, 2, 3, 4, 5]
// map is O(n) time and builds a new array, O(n) space
let nums = arr.map(Number);

let total = 0;

// i is the locker number: 0, 1, 2, ... up to the last locker
for (let i = 0; i < nums.length; i++) {
    total = total + nums[i]; // add what's inside locker i
}

// Edge case: if n is 0, dividing by 0 would give NaN, so guard it
let mean = n === 0 ? 0 : total / n;

console.log("Sum: " + total);

// toFixed(1) forces one decimal place, so 3 prints as "3.0"
// (it returns a string, which is fine for printing)
console.log("Mean: " + mean.toFixed(1));