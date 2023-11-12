// Requirment

// Given a string of digits, you should replace any digit below 5 with '0'
// and any digit 5 and above with '1'. Return the resulting string.

// Note

// Note: input will never be an empty string//

// My Solution

function fakeBin(x) {
  typeof x == "number" ? (x = x.toString()) : x;
  let arr = [...x],
    editedArr = [],
    i = 0;

  while (i < x.length) {
    arr[i] >= 5 ? (arr[i] = "1") : arr[i] < 5 ? (arr[i] = "0") : arr[i];
    editedArr.push(arr[i]);
    i++;
  }

  return editedArr.join("");
}
console.log(fakeBin(213467453634634522));
