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

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(["A", "B", "C"]));
///////
function reverseArray1(arr) {
  return arr.map((item, index) => arr[arr.length - 1 - index]);
}
console.log(reverseArray1(["A", "B", "C"]));
