/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

// Your code here.

function reverseArray(arr) {
    let reverseArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
        reverseArr[i] = arr[arr.length - i - 1];
        reverseArr[arr.length - i - 1] = arr[i];
    }
    return reverseArr;
    // return arr.reverse();
}
console.log(reverseArray(["A", "B", "C"]));

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
