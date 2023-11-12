let lovefunc = (flow1, flow2) => {
  let arr = [flow1 % 2, flow2 % 2];
  if (
    arr.every((flo) => flo === 1) == true ||
    arr.every((flo) => flo === 0) == true
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(loveFunc(4, 1));
