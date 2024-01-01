// Requirements

// - Complete the function that accepts a string parameter,

// - and reverses each word in the string.

// - All spaces in the string should be retained.

// Examples

// - "This is an example!" ==> "sihT si na !elpmaxe"
// - "double  spaces"      ==> "elbuod  secaps"

// My Solution

let reverseWords = (str) => {
  return str
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
};

// My Test

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
