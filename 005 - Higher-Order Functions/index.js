const { countBy, characterScript } = require("./05_higher_order");
const SCRIPTS = require("./scripts");
require("./scripts.js");

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

/* function every(array, test) {
  for (let item of array) {
    if (!test(item)) {
      return false;
    }
  }
  return true;
} */

function every(array, test) {
  return !array.some((item) => !test(item));
}

console.log(every([1, 3, 5], (n) => n < 10));
// true
console.log(every([2, 4, 16], (n) => n < 10));
// false
console.log(every([], (n) => n < 10));
// true

/* 
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
} */

// Dominant writing direction
console.log("Dominant writing direction:");

function dominantDirection(text) {
  const scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  scripts.sort((a, b) => b.count - a.count);

  return scripts[0].name;
}

console.log(dominantDirection("Hello!"));
// ltr
console.log(dominantDirection("Hey, مساء الخير"));
// rtl

/* 
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
} */
