// Requirements

// Simple, given a string of words,

// return the length of the shortest word(s).

// String will never be empty and you

// do not need to account for different data types.

// My Solution

let findShort = (s) => {
  return s.split(" ").reduce((a, c) => (a.length <= c.length ? a.length : c));
};

// Tests

// - Test

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// - Test

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
m
// - Test

console.log(findShort("Let's travel abroad shall we"));

let test = " Hello ";

const BAN = "IM HERE";

let sa = "";
