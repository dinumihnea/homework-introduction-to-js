/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

// Your code here.

const reverseArray = (arr) => {
	let sortedArr = [];
	
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr.push(arr[i]);
	}
	
  return sortedArr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
