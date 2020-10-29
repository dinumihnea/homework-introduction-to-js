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
  return arr.slice().reverse(); //slice() return a new array
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
