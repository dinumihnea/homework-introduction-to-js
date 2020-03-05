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

function triangle(){
    let character = "#";
    for(var i = 0; i <= 10; i++) {
        for (var j = 1; j < i; j++) {
            console.log(character.repeat(j));
        }
        console.log("\n");
    }
}

triangle();