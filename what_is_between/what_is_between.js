// Requirements

// Complete the function that takes two integers

// (a, b, where a < b) and return an array of all

// integers between the input parameters, including them.

//-- - - - -- - -

// Examples

// a = 1

// b = 4

// --> [1, 2, 3, 4]

// My Solution

let between = (a, b) => {


  let arr = [];

  for (let i = a; i <= b; a < b ? i++ : i--) {
    arr.push(i);
  }
  return arr;
};

// Test

console.log(between(2, 100));
