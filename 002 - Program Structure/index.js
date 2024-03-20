// 002 - Program Structure

// EXERCISES

// Looping a triangle

let triangleRow = "";

while (triangleRow.length < 7) {
  triangleRow += "#";
  console.log(triangleRow);
}

/* for (let line = "#"; line.length < 8; line += "#") console.log(line); */

// FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
} */

// Chessboard

let chessRowCount = 0;
let chessRow = "";
let board = "";
const white = " ";
const black = "#";

while (chessRowCount < 8) {
  for (let j = 0; j < 8; j++) {
    if (chessRow.length % 2 === 0) {
      chessRow += chessRowCount % 2 === 0 ? white : black;
    } else {
      chessRow += chessRowCount % 2 !== 0 ? white : black;
    }
  }
  chessRow += "\n";
  board += chessRow;
  chessRow = "";
  chessRowCount++;
}

console.log(board);

/* let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
 */
