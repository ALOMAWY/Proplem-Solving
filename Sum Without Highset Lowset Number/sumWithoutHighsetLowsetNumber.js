// Requirements

// sum Array Without Largest And Smallest Numbers

// My Solution

let sumArray = (array) => {
  let arr = array;

  if (arr == null || arr.length <= 2) {
    return 0;
  } else {
    arr.sort((a, b) => a - b);

    return arr.slice(1, arr.length - 1).reduce((acc, cur) => +acc + +cur);
  }
};


// Test
console.log(sumArray([2, 4, 56, 7, 8, 96, 4357]));
