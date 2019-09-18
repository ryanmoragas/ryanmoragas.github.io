// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Use the reduce method in combination with the concat method to “flatten” an 
// array of arrays into a single array
function flatten(array){
    //loop through the array
    for(var i=0; i<array.length; i++){
      // while looping run the concat function to merge spliced values into one array
      if(array[i] instanceof Array){
        Array.prototype.splice.apply(array,[i,1].concat(array[i]))
      }
    }
    return array;
};

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//Designed to loop through values, reassigning them until all are true
// takes a value, a test function, an update function, and a body function
function loop(start, test, update, body) {
// first runs the test function on the current loop value. Stops if that returns false. 
// Then it calls the body function, giving it the current value. It then calls the 
// update function to create a new value and retartes the loop
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
};

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// takes an array and a function as parameters
// returns true if the given function returns true for every value in the array
// if one value returns false, return false
function every(array, funct) {
  for (let key of array) {
    // returns true if the given function returns true for every value in the array
    // if one value returns false, return false
      if (!funct(key)) {
        return false;
      }
    }
    return true;
};

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// computes the dominant writing direction in a string of text
// each script object has a direction property that can be "ltr" (left to right), 
// "rtl" (right to left), or "ttb" (top to bottom).
function dominantDirection(text) {
  let counted = countBy(text, i => { 
    //loops through each letter of the text and creates an array with the name 
    //"ltr", "rtl", or "ttb" or adds to the counter of said array.
    let script = characterScript(i.codePointAt(0)); 
    //stores the object in script variable or returns false if there is no object
    return script ? script.direction : "none"; 
    //Uses ternary to either return "none" or it returns the script direction
    })
  .filter(({name}) => name != "none"); 
  //filters out objects whose name property is "none"
  if (counted.length == 0) return "ltr";
  //reduce loops over the counted var and return the array.name
  return counted.reduce((a, b) => a.count > b.count ? a : b).name; 
}
// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
