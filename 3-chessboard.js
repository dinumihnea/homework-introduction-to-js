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

let row = "";

const chessBoard = (width, height) => {
  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= height; j++) {
      if ((i + j) % 2 === 0) {
        row += "#";
      } else {
        row += " ";
      }
    }
    row += "\n";
  }
  return row;
};

console.log(chessBoard(8, 8));

// giving another size example:
// console.log(chessBoard(15,15));
