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

function minimum (number1, number2){
    var array = [number1, number2];
    var min = array[0];
    for (var i = 1; i <= array.length; i++)
    {
        if(array[i] < min)
        {
            min = array[i];
        }
    }
    console.log(min);
}

minimum(9,0);

    /*

    console.log(max_of_array = Math.min.apply(Math, array));

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
