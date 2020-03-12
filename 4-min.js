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

// 4.1
function getMin(number1, number2) {
  if (number1 < number2) {
      return number1;
  } else {
      return number2;
  }
}
console.log(getMin(1, -1));


// 4.2
function minArr(numbers) {
    let indexOfMin = 0
    let min = numbers[0]
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i]
        indexOfMin = i
      }
    }
    return min;
  }
  
  console.log(minArr([2,5,7,1,-15]));//-15


