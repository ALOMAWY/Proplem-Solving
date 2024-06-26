// Requirements

/* 

  You might know some pretty large perfect squares. But what about the NEXT one?

  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

  If the parameter is itself not a perfect square then -1 should be returned.

  You may assume the parameter is non-negative.

*/

// My Solution

let findNextSquare = (sq) => {
  if (Number.isInteger(Math.sqrt(sq))) {
    for (let i = sq + 1; i < sq * 2; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        return i;
        break;
      }
    }
  } else {
    return -1;
  }
};

console.log(findNextSquare(121));
// Get the cursor element
// const cursor = document.getElementById("cursor");

// // Add a mousemove event listener to the document
// document.addEventListener("mousemove", function (e) {
//   // Get the mouse coordinates
//   let x = e.pageX;
//   let y = e.pageY;

//   // Update the cursor position and display
//   cursor.style.top = y + "px";
//   cursor.style.left = x + "px";
//   cursor.style.display = "block";
// });

// // Add a mouseout event listener to the document
// document.addEventListener("mouseout", function (e) {
//   // Hide the cursor
//   cursor.style.display = "none";
// });
