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

function minUpdated (numbers) {

    min = numbers[0];

    for (index = 1; index < numbers.length; index++) {
        if ( numbers[index] < min ) {
            min = numbers[index];
        }
    }

    console.log(`Minimun is ${min}`);
}

minUpdated([2, 4, -4, 10, 0, -9, 17]);

function minNum(num1, num2) {

    let min;

    if (num1 < num2) {
        min = num1;
    } else {
        min = num2;
    }

    console.log(`The minimum is: ${min}`);
}

minNum(0, 10);
minNum(0, -10);


// Use these commands to test your code:
//
//console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10
//
