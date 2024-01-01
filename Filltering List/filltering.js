// Requirements

/* 

    In this kata you will create a function that takes

    a list of non-negative integers and strings and returns

    a new list with the strings filtered out.

*/

// My Solution

let filter_lest = (l) => Array.from(l).filter((e) => typeof e == "number");

