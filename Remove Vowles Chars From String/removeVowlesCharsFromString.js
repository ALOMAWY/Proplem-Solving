// Requirements

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// My Solution

let disemvowel = (str) => {
  return str
    .split("")
    .map((char) =>
      char == "a" ||
      char == "A" ||
      char == "e" ||
      char == "E" ||
      char == "o" ||
      char == "O" ||
      char == "i" ||
      char == "I" ||
      char == "u" ||
      char == "U"
        ? (char = "")
        : char
    )
    .join("");
};

console.log(disemvowel("This website is for losers LOL!"));
