// Requirements

// - Write function bmi that calculates body mass index (bmi = weight / height2).

// -- if bmi <= 18.5 return "Underweight"

// -- if bmi <= 25.0 return "Normal"

// -- if bmi <= 30.0 return "Overweight"

// -- if bmi > 30 return "Obese"

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// My Solution

let bmi = (weight, height) => {
  let bmiValue = weight / Math.pow(height, 2);

  

  if (bmiValue <= 18.5) {
    return "Underweight";
  } else if (bmiValue <= 25) {
    return "Normal";
  } else if (bmiValue <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

console.log(bmi(109, 1.8));
