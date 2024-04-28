// 004 - Data Structures

// EXERCISES

// The sum of a range
console.log("The sum of a range:");

function range(start, end, step) {
  let arr = [];
  const ascending = end > start ? true : false;

  if (ascending) {
    for (let i = start; i <= end; i = i + (step || 1)) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + (step || -1)) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(range(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// 55

/* function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
} */

// Reversing an array
console.log("Reversing an array:");

let myArray = ["A", "B", "C"];

function reverseArray(arr) {
  let newArr = [];
  for (let item of arr) {
    newArr.unshift(item);
  }
  return newArr;
}

console.log(reverseArray(myArray));
// ["C", "B", "A"]
console.log(myArray);
// ["A", "B", "C"]

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    const lastItem = arr.pop();
    arr.splice(i, 0, lastItem);
  }
  return arr;
}

console.log(reverseArrayInPlace(arrayValue));
// [ 5, 4, 3, 2, 1 ]
console.log(arrayValue);
// [ 5, 4, 3, 2, 1 ]

/* function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
} */

// A list
console.log("A list:");

function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    const newListItem = {
      value: arr[i],
      rest: list,
    };
    list = newListItem;
  }

  return list;
}

function listToArray(lst) {
  let array = [];
  let newList = lst;

  while (newList.rest) {
    array.push(newList.value);
    newList = newList.rest;
  }

  array.push(newList.value); // add the last value

  return array;
}

function prepend(newVal, lst) {
  const newlistItem = {
    value: newVal,
    rest: lst,
  };
  return newlistItem;
}

let counter = 0;

function nth(lst, num) {
  let newList = lst;

  if (num !== counter && lst.rest) {
    newList = lst.rest;
    counter++;
    return nth(newList, num);
  } else if (num === counter) {
    return lst.value;
  } else {
    return undefined;
  }
}

console.log(arrayToList([10, 20]));
// {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20

/* function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
} */

// Deep comparison
console.log("Deep comparison:");

function deepEqual(first, second) {
  if (first === second) {
    return true;
  } else if (typeof first === "object" && typeof second === "object") {
    if (!first || !second) {
      return false;
    } else {
      const firstKeys = Object.keys(first);
      const secondKeys = Object.keys(second);

      if (
        firstKeys.length !== secondKeys.length ||
        firstKeys.toString() !== secondKeys.toString()
      ) {
        return false;
      } else {
        for (var i = 0; i < firstKeys.length; i++) {
          return deepEqual(first[firstKeys[i]], second[secondKeys[i]]);
        }
      }
    }
  } else {
    return false;
  }
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// true

/* function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
} */
