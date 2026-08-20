let fact = 1;
let n = 5

for (let i = 1; i <= n; i++) {
    if (n != 0) {
        fact = fact * i;
    } else {
        return fact
    }
}

console.log(fact)
