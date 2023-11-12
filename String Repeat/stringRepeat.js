// Requirements

// Write a function that accepts an integer n and a string s as parameters,
// and returns a string of s repeated exactly n times.s

// Examples

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// My Solution

let repeatStr = (n, s) => s.repeat(n);

// Test
console.log(repeatStr(7, `How Are You ${n}`));
