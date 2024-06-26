// Requirements

// Create a method to see whether the string is ALL CAPS.
//-- - - - -- - -

// Examples

// "c" -> False

// "C" -> True

// "hello I AM DONALD" -> False

// "HELLO I AM DONALD" -> True

// "ACSKLDFJSgSKLDFJSKLDFJ" -> False

// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// My Solution

String.prototype.isUpperCase = function () {
  let arr = [];

  Array.from(this).map((e) =>
    e == e.toUpperCase() ? arr.push(true) : arr.push(false)
  );

  return arr.every((num) => num == true);
};

// Test

console.log("ASSAa".isUpperCase());
