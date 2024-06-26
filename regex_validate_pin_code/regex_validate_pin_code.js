// Requirements

// Given an array of integers your solution should find the smallest integer.

// Examples

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My Solutions

// - First Solution

// RegExp Solution

// - Secound Solution

// Regular Solution

let validatePIN = (pin) => {
  let pattern = /^(\d{4}|\d{6})$/gi;

  return pattern.test(pin) ? true : false;
};
// My Test
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("a123"));
console.log(validatePIN("-12345"));
console.log(validatePIN("1234.0"));
console.log(validatePIN("4/1755"));
// console.log(validatePIN("1234432"));
// console.log(validatePIN("123214"));
// console.log(validatePIN("a214"));

// let basicArray = ["a", "b", "c", 2, 3, 4, 5, 1];

// console.log(str.map((e) => basicArray.indexOf(e)).every((e) => e < 0));
