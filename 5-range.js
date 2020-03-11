/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.

 // Create an array using start and end points
 function range(start, end, step) {

    let numbers = [];
    let arrayIndex = 0;

    if ( step !== undefined && start > end ) {

        for (let count = start; end <= count; count += step) {

            numbers[arrayIndex] = count;
            arrayIndex++; 
            
        }

    } else if ( step == undefined && start < end )  {

        for (let a = start; a <= end; a++) {

            numbers[arrayIndex] = a;
            arrayIndex++;

        }

    }

    return numbers;

} 

// Calculating array sum 
function sum(numbers) {

    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }
    return sum;

} 

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


