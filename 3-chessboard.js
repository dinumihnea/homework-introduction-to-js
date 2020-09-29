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
bigChessboard = function (n) {
  let chessboard = "";
  for (let k = 0; k < n; k++) {
    if (k % 2 === 0) {
      chessboard = "";
      for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
          chessboard += "#";
        } else {
          chessboard += " ";
        }
      }
      console.log(chessboard);
    } else {
      console.log(" " + chessboard);
    }
  }
};

bigChessboard(8);
console.log("next");
bigChessboard(6);
console.log("next");
bigChessboard(5);
