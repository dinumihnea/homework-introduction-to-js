/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

function reverseArray(arr) {
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
}
return reversedArr;
}

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
