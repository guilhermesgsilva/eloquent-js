// 003 - Functions

// CLOSURE

function multiplier(factor) {
  return (number) => number * factor;
}

console.log(multiplier(2));
// [Function (anonymous)]
// (number) => number * factor;

let twice = multiplier(2);
console.log(twice(5));
// 10

// EXERCISES

// Minimum
console.log("Minimum:");

function min(a, b) {
  return a > b ? a : b;
}

console.log(min(0, 10));
// 0
console.log(min(0, -10));
// -10

/* function min(a, b) {
  if (a < b) return a;
  else return b;
} */

// Recursion
console.log("Recursion:");

function isEven(num) {
  if (num < 0) {
    return isEven(-num);
  } else if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50));
// true
console.log(isEven(75));
// false
console.log(isEven(-1));
// false

/* function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
} */

// Bean counting
console.log("Bean counting:");

function countBs(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "b") count++;
  }

  return count;
}

console.log(countBs("BOB"));
// 2

function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char.toLowerCase()) count++;
  }

  return count;
}

console.log(countChar("kakkerlak", "k"));
// 4

/* function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
} */
