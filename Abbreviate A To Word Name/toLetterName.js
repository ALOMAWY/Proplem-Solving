// Requirements

// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// My Solution

let abbrevName = (name) => {
  let indexOfSpace = name.indexOf(" ");
  return `${name.substr(0, 1).toUpperCase()}.${name
    .substr(indexOfSpace + 1, 1)
    .toUpperCase()}`;
};

// Test
console.log(abbrevName("Alomawy Syria"));
