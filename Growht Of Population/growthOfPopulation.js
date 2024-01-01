// let nbYear = (p0, percent, aug, p) => {
//   let i = 0;

//   let percent_100 = eval(`${p0} / ${100} * ${percent}`);

//   let percent_100_aug = 0;

//   let years = percent_100 + aug;

//   let result = p / years;
//   return result;
// };

// console.log(nbYear(1500, 5, 100, 5000));

// function nbYear(p0, percent, aug, p) {
//   let startPoint = p0;

//   let accNum = 0;

//   let loop = 0;

//   let sum = startPoint;

//   console.log(sum);

//   let i = 0;
//   while (i < 15) {
//     accNum = sum + aug + (p0 / 100) * percent;

//     sum = accNum + aug + (accNum / 100) * percent;

//     loop++;
//     i++;
//   }
//   return `${loop} -- ${parseInt(sum)}`;
// }

// console.log(nbYear(1500, 5, 100, 5000));

// for (let j = p; j == sum; j++) {
//   accNum = p0 + aug + (p0 / 100) * percent;
//   console.log(sum);

//   sum = accNum + 100 + (sum / 100) * 5;

//   return console.log(sum);
// }

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

// function nbYear(p0, percent, aug, p) {
//   for (var years = 0; p0 < p; years++) {
//     p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
//   }
//   return years;
// }

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500, 5, 100, 5000));
