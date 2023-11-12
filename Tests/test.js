const reverseSeq = (n) => {
  console.log(Array(n));
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
console.log(reverseSeq(4));

Array(4)
  .fill(0)
  .map((e, i) => 4 - i);