/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * It may be useful to know that you can find the length of a string by writing .length after it.
 * let abc = "abc";
 * console.log(abc.length); → 3
 */

// Your code here.


function repeat(str, num) {

    // result string
    let result = '';

    // count the lines
    for (let count = 1; count <= num; count++ ) {

        // counts the number of symbols for each line    
        while(result.length < count ) {
            result += str;
            console.log(result);
        }}
   
  }

repeat("#", 7);
