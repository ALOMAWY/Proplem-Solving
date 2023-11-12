// Requirements

// The first century spans from the year 1 up to and including the year 100,-
// the second century - from the year 101 up to and including the year 200, etc.

// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// My Filed Solutions

// function century(year) {
//   let strYear = year.toString();
//   Number(strYear.substr(-strYear.length / 2)) > 0
//     ? (strYear = Number(strYear.substr(0, 2)) + 1)
//     : (strYear = strYear.substr(0, 2));
//   return +strYear;
// }

// console.log(century(90));

// function century(year) {
//   let strYear = year.toString();

//   let completeNumber;

//   if (strYear.length == 2) {
//     strYear.substr(-1) == 0
//       ? (completeNumber = strYear)
//       : (completeNumber = Number(`${+strYear.substr(0, 1) + 1}${0}`));

//     return +completeNumber;
//   }
//   // Number(strYear.substr(-strYear.length / 2)) > 0
//   //   ? (strYear = Number(strYear.substr(0, 2)) + 1)
//   //   : (strYear = strYear.substr(0, 2));
//   return +strYear;
// }

// My Correct Solution

let century = (year) => {
  let strYear = year.toString();
  if (strYear.length > 2) {
    if (strYear.substr(-Math.floor(strYear.length / 2)) > 0) {
      return (strYear = +strYear.substr(0, Math.floor(strYear.length / 2)) + 1);
    } else
      return (strYear = +strYear.substr(0, Math.floor(strYear.length / 2)));
  } else {
    return (strYear = 1);
  }
};

// Test
console.log(century(100));
