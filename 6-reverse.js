/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

function reverseArr(input) {
    var array = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        array.push(input[i]);
    }
    return array;
}

var a = [3,5,7,8];
var b = reverseArr(a);
console.log(b);

/*function reverseArrayInPlace(array){
var array = [1,2,3];
var reversearr = array.reverse();
console.log(reversearr);
}
*/

// Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
