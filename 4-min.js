/**
 * MINIMUM
 *
 * to run code from this file use: npx nodemon 4-min
 *
 * 4.1 Write a function that will bring two Number arguments and will return the minimum of these two arguments
 *
 * 4.2 Optional: Modify the min function created before to bring an array of numbers as a
 *    single argument and return the smallest number from this array.
 *    (e.g: console.log(minArr([2, 4, -4, 10, 0, -9, 17]));  → -9
 *
 */

// Your code here.
//
// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//
const array = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];

let max = getMaxValue(array);
let min = getMinValue(array);

function getMaxValue(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return `Max is ${max}`;
}

console.log(max);

function getMinValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return `Min is ${min}`;
}
console.log(min);
