// Requirements

// Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

// Example

// 35231 => [1,3,2,5,3]
//   0   => [0]

// My Solutions

let digitize = (n) => {
  let newArr = [],
    str = n.toString(),
    arr = [...str];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(+arr[i]);
  }
  return newArr;
};

console.log(digitize(0));
