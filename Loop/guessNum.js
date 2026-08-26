let prompt = require("prompt-sync")();
let user 
let comp = Math.floor((Math.random() * 100) + 1)
do {
    user = Number(prompt("Number : "));
    if (user < comp) {
        console.log("small")
    } else if (user > comp) {
        console.log("Large")
    } else if (user == comp) {
        console.log("Congratulations!!!!!")
    } else {
        console.log("Invalid")
    }
} while (user != comp)