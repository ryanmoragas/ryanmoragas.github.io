
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**Write a loop that logs the pound sign. Every line the loop should log one 
 * more pound sign than the previous line, creating a triangle.
 */
//takes a number param
function triangles(num) {
  //loop should add another "#" for each line
for (var i = "#"; i.length <= num; i += "#")
console.log(i);
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes a start and end range of numbers
function fizzBuzz(start, end) {
  
/**Create a funtion that prints the numbers in ascending order.
 * For multiples of 3 replace the number with the string "fizz".
 * For multiples of 5 replace the number with the string "buzz".
 * For multiples of 3 and 5 replace the number with the string "fizzbuzz".
 */
for (let i = start; i <= end; i++){
    if(i % 15 === 0) {
     //log fizzbuzz if multiples of 3 & 5
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
     //log fizz if multiples of 3
        console.log("fizz");
    } else if (i % 5 === 0) {
    //log buzz if multiples of 5
        console.log("buzz");
    } else {
        console.log(i);
    }
  }
  
};

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**Create a program that creates a string that represents an 8×8 grid, using newline 
 * characters to separate lines. At each position of the grid there is either a space 
 * or a "#" character. The characters should form a chessboard.
 */
 
//takes a num to declare how wide/long chessboard will be
function drawChessboard(num) {
  
  let chessboard = "";
  //each line should log alternating "#" and " " values
  for (let i = 0; i < num; i++) {
    for (let x = 0; x < num; x++) {
      if ((x + i) % 2 === 0) {
          chessboard += " ";
      } else {
          chessboard += "#";
      }
    }
      chessboard += "\n";
}
  console.log(chessboard);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
