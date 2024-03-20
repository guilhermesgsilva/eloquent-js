// 003 - Functions

// CLOSURE

function multiplier(factor) {
  return (number) => number * factor;
}

console.log(multiplier(2));
// [Function (anonymous)]

let twice = multiplier(2);
console.log(twice(5));
// 10

// EXERCISES
