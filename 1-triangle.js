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

let row = '';
for (let i=0; i<7; i++) {
    for (let j=0; j<=i; j++) {
        row += '#';
    }
    row += '\n';
}
console.log(row);