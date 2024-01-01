let XO = (str) => {
  let xes = [],
    ohs = [];
  str
    .split("")
    .map((char) => (char == "x" || char == "X" ? xes.push(char) : false));
  str
    .split("")
    .map((char) => (char == "o" || char == "O" ? ohs.push(char) : false));

  return ohs.length == xes.length ? true : false;
};

console.log(XO("ooxx"));
