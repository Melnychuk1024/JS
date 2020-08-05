"use strict";

const arr = [1, 2, 23, 44, 565, 46, 237, 8];

console.log(arr.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(8);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} всередині масива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));