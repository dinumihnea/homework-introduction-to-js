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

// single array as argument:

let arr = [];

const minArr = (_arr) => {
  const sorted = _arr.sort((a, b) => (a < b ? -1 : 1));

  return sorted[0];
};

console.log(minArr([2, 4, -4, 10, 0, -9, 17]));


// two numbers as arguments:

const min = (num1, num2) => {
	const result = (num1 < num2) ? num1 : num2;
	
  return result;
}

console.log(min(0, -10));
