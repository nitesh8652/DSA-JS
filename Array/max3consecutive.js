let arr = [2, 1, 5, 1, 3, 2];

//REVIEWWWWWWWWWWWWWWWWWWWWWWWWWW

// -Infinity se shuru: sab numbers negative hon tab bhi sahi chalega
let maxSum = -Infinity;

if (arr.length < 3) {
    // 3 elements se kam hain to group ban hi nahi sakta
    console.log("Array mein kam se kam 3 elements chahiye");
} else {
    // Last valid start index = arr.length - 3, isliye <= lagaya
    for (let i = 0; i <= arr.length - 3; i++) {
        let sum = 0; // har naye group ke liye fresh reset

        // Group ke 3 elements: arr[i], arr[i+1], arr[i+2]
        for (let j = 0; j < 3; j++) {
            sum += arr[i + j];
        }

        // Group ka sum ban gaya, turant best se compare karo
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    console.log(maxSum); // 9
}