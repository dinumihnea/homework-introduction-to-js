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
//
// console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

// 5.1
function range(start, end) {
    return [...Array(end).keys()].map(i => i + start);
}
console.log(range(1,10));

//sum function
function sum(input){
             
             if (toString.call(input) !== "[object Array]")
                return false;
                  
                        let total =  0;
                        for(let i = 0; i < input.length; i++)
                          {                  
                            if(isNaN(input[i])){
                            continue;
                             }
                              total += Number(input[i]);
                           }
                         return total;
                        }
            console.log(sum([1,2,3]));

// 5.2
function range(start, end, step) {

  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  end = end || 0;
  step = step || 1;

  let arr = [];
  for (arr; (end - start) * step > 0; start += step) {
    arr.push(start);
  }
  return arr;
}
console.log(range(2));
console.log(range(1,10,2));