// 005 - Higher-Order Functions

// EXERCISES

// Flattening
console.log("Flattening:");

let arrays = [[1, 2, 3], [4, 5], [6]];

function flattening(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(val);
  }, []);
}

console.log(flattening(arrays));
// [1, 2, 3, 4, 5, 6]

/* 
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
*/

// Your own loop
console.log("Your own loop:");

function loop(value, testFn, updateFn, bodyFn) {
  for (let i = value; testFn(i); i = updateFn(i)) {
    bodyFn(i);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// 3
// 2
// 1

/* 
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
} */

// Everything
console.log("Everything:");

/*  */

// Dominant writing direction
console.log("Dominant writing direction:");

/*  */
