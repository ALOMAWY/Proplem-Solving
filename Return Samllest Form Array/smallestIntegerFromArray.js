// Requirements

// Given an array of integers your solution should find the smallest integer.

// Examples

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// My Solutions

// - First Solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// - Secound Solution

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let testing = args.reduce(function (a, c) {
      let strA = a.toString();
      let strC = c.toString();

      return +strA <= +strC ? +strA : +strC;
    });
    return testing;
  }
}

// My Test

console.log(SmallestIntegerFinder(2, 5, 7, -21, 3, 12));
