let arr = [1, 1, 2, 2, 3];
let store = [];

for (let i = 0; i < arr.length; i++) {
    if (store.indexOf(arr[i]) === -1) {
        store.push(arr[i]);
    }
}

console.log(store); 