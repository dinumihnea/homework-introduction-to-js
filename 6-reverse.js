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
  let response = [];
  for (let i = 0; i < arr.length; i++) {
    response.push(arr[arr.length - i - 1]);
  }
  return response;
}

console.log("reversed array: ", reverseArray(["A", "B", "C"]));
