// Requirements

// This kata is about multiplying a given number by eight

// if it is an even number and by nine otherwise.

//-- - - - -- - -

// Examples

// My Solution

let simpleMultiplication = (number) => {
  return number % 2 == 0 ? number * 8 : number * 9;
};

// Test

console.log(simpleMultiplacation(5)); // 45

console.log(simpleMultiplacation(4)); // 32
