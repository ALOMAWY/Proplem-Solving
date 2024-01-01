// Requirements

// This time no story,
// no theory. The examples below show you how to write function accum:

// Examples


// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// My Solution

function accum(s) {
  let str = s
    .split("")
    .map((e, i) => e.repeat(i + 1))
    .join("-");

  return str
    .split("-")
    .map((e) => e.substr(0, 1).toUpperCase() + e.slice(1).toLowerCase())
    .join("-");
}

// Test
console.log(accum("ZpglnRxqenU"));


