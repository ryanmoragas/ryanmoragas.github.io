////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a function min that takes 2 parameters and returns their minimum
function min(numOne, numTwo) {
  if (numOne < numTwo){
    return numOne;
  } else {
    return numTwo;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**Create a function named isEven. The function should accept a single 
 * parameter and return a Boolean.
 */
function isEven(num) {
  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**Create a function called countChar that loop through a string and counts how 
 * many times a specific charter appears
 */
function countChars(string, char) {
    let count = 0;
    //loop through the string to count specific characters
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            count++;
        }
    }
    return (count);
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**Create a function countBs that takes a string as its only argument and returns 
 * a number that indicates how many uppercase “B” characters there are in the string.
 */
function countBs(string) {
    let count = 0;
    //loop through the string to count "B"s
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            count++;
        }
    }
    return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
