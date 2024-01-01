// Requirements

// -  You are going to be given a word.

// -  Your job is to return the middle character of the word.

// -  If the word's length is odd,

// -  return the middle character.

// -  If the word's length is even,

// -  return the middle 2 characters.

// My Solution

let getMiddle = (s) => {
  return s.length % 2 == 0
    ? s.substr(Math.floor(s.length / 2) - 1, 2)
    : s.substr(Math.floor(s.length / 2), 1);
};

// Test

console.log(getMiddle("Osama"));
