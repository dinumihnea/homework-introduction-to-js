/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

// Your code here.

function reverseArray(array) {

    let newArray = [];
    let lastIndex = array.length -1;

    for (let count = lastIndex; count >= 0; count--) {
        
        // Use method push on array to add elements to the end of array one by one
        newArray.push(array[count]);
    }

    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
