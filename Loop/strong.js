function isStrongNumber(n) {
    let save = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        
        sum = sum + fact;
        n = Math.floor(n / 10);
    }

    if (sum === save) {
        return "Yes";
    } else {
        return "No";
    }
}

module.exports = { isStrongNumber };