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
 * Try to find the most optimal way to do this.
 *
 */

// Your code here.

function triangle(n){
    for(let i = 0; i<n; i++){
        let row = '';
        for(let j = 0; j<i; j++){
            row += '#';
        }
        console.log(row);
    }
}

triangle(7);