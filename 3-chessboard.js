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
let size = 8;
let board = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((j + i) % 2 == 0) board += "#";
    else (j + i) % 2 == 0;
    board += " ";
  }
  board += "\n";
}
console.log(board);

let width = 3;
let heigth = 6;
let chessBoard = "";

for (let i = 0; i < heigth; i++) {
  for (let j = 0; j < width; j++) {
    i % 2 == 0 ? (chessBoard += "#" + " ") : (chessBoard += " " + "#");
  }
  chessBoard += "\n";
}
console.log(chessBoard);
