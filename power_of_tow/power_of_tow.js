// Requirements

// Complete the function that takes a non-negative integer n as input,

// and returns a list of all the powers of 2

// with the exponent ranging from 0 to n ( inclusive ).

//-- - - - -- - -

// Examples

// 765 => 493625

// My Solution

function powersOfTwo(n) {
  const array = [];

  for (let i = 1; array.length <= n; i = i * 2) {
    array.push(i);
  }

  return array;
}
// Test

console.log(powersOfTwo(2));
