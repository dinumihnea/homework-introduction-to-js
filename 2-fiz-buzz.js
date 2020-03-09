/**
 * FIZZ_BUZZ
 *
 * to run code from this file use: npx nodemon 2-fiz-buzz
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 * (and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
 *
 *
 */

// Your code here.

for(let count = 1; count <= 100; count++) {

    // First check if number is divisible by both 
    if (count % 3 == 0 && count % 5 == 0) {
        console.log('FizzBuzz');
    }
    // Check if divisible 3 
    else if (count % 3 == 0) {
        console.log('Fizz');
    }
    // Check if divisible 5  
    else if(count % 5 == 0) {
        console.log('Buzz');
    }
    // If none of above is true then print the number itself 
    else {
        console.log(count);
    }

} 