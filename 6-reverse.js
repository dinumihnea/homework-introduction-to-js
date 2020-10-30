/**
 * REVERSE
 *
 * to run code from this file use: npx nodemon 6-reverse
 *
 * Write a function that takes an array as argument and produces a new array that has the same elements in the inverse order.
 *
 */

function reverseArray(arr){
    //caveman solution
    const newArr = [];
    arr.forEach(element => {
        newArr.unshift(element);
    });
    return newArr;
    //normal solution
    // return arr.reverse();
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
