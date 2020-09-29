/**
 * CHESSBOARD
 *
 * to run code from this file use: npx nodemon 3-chessboard
 *
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
 * At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
 * Passing this string to console.log should show something like this:
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 *
 * When you have a program that generates this pattern, define a binding size = 8 and change the program so
 * that it works for any size, outputting a grid of the given width and height.
 *
 */

// Your code here.
function setChessboard(bindingSize) {
    for(let i = 0; i < bindingSize; i++) {
        let str = '';
        for(let j = 0; j < bindingSize; j++) {
            let oddSymbol = ' ';
            let evenSymbol = '#';
            if (i % 2 === 0) {
                oddSymbol = '#';
                evenSymbol = ' ';
            }
            if (j % 2 == 0) {
                str += oddSymbol;
            } else {
                str += evenSymbol;
            }
        }
        console.log(str);
    }
}
setChessboard(8);