// const reverseSeq = (n) => {
//   console.log(Array(n));
//   return Array(n)
//     .fill(0)
//     .map((e, i) => n - i);
// };
// console.log(reverseSeq(4));

// Array(4)
//   .fill(0)
//   .map((e, i) => 4 - i);

function numbers_range(number) {
  return Array(number + 1)
    .fill(0)
    .map((e, i) => number - i)
    .reverse()
    .join(" ");
}

console.log(numbers_range(6));
