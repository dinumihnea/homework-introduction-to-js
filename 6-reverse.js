/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

// Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
function reverseArr(input) {
    let reverse = new Array;
    for(let i = input.length-1; i >= 0; i--) {
        reverse.push(input[i]);
    }
    return reverse;
}

console.log(reverseArr(["A", "B", "C"]));