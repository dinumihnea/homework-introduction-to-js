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

console.log("The first one");

let triangle = "";
let hash = 0;
let sft = 7;

while (hash < 8) {
  let hash1 = 0;
  while (hash1 < 8) {
    if (hash1 < sft) {
    } else {
      triangle += "#";
    }
    hash1++;
  }
  sft--;
  hash++;
  triangle += "\n";
}
console.log(triangle);

console.log("The second one");

for (let i = 0; i < 7; i++) {
  switch (i) {
    case 0:
      console.log("#");
      break;
    case 1:
      console.log("##");
      break;
    case 2:
      console.log("###");
      break;
    case 3:
      console.log("####");
      break;
    case 4:
      console.log("#####");
      break;
    case 5:
      console.log("######");
      break;
    case 6:
      console.log("#######");
      break;
  }
}
