////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**Write a range function that takes two arguments, start and end, and returns an 
 * array containing all the numbers from start to end.
 * 
 * Modify your range function to take an optional third 
 * argument that indicates the “step” value used when building the array. If no 
 * step is given, the elements go up by increments of one, corresponding to the 
 * old behavior.
 */
function range(start, end, step) {
    var array = [];
    //return empty array if numbers are the same
    if (start === end) {
    return array;
    //if no step is listed, count by 1
    } else if (step === undefined){
      for (let i = start; i <= end; i++)
        array.push(i);
    //count by step if it is greater than 0    
    }else if (step > 0) {
      for (let i = start; i <= end; i += step)
        array.push(i);
    //if step is negative, count backwards from start to end  
    } else {
      for (let i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
};
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Returns the sum of all items in an array
function sum(array) {
    let num = 0
    //loop through the array and add all values
    for (let i = 0; i < array.length; i++){
      num += array[i];
    }
    return num;
};
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Takes an array as argument and produces a new array that has the same elements 
//in the inverse order
function reverseArray(array) {
    var newArray = [];
    //loop backwards and return an array with the same values in the opposite order
    for (var i = array.length-1; i >= 0; i--){
    newArray.push(array[i]);
    }
    return newArray;
};
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Make a functiuon that reverses all the elements in the given array, returning 
//the original array
function reverseArrayInPlace(array) {
  for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
      //make a var to hold the old value before replacing it
      var oldValue = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = oldValue;
  }
  return array;
};
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//function should build up a list structure
//list should be an object
//object should have value 1, then the next set of values in a new object in a rest key
function arrayToList(array) {
  var list = null;
  //create the list object by looping through the array
  for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
  }
  return list;
};
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// a function that produces an array from list object created in arrayToList.
function listToArray(object) {
  var array = [];
  //loop through the object and push the values to the new array
  for (let i = object; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};
////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes an element and a list and creates a new list that adds the element to the 
// front of the input list
function prepend(value, list) {
  return {value, rest: list};
};

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  takes a list and a number and returns the element at the given position in 
// the list or undefined when there is no such element.
function nth(list,n) {
    //return undefined if no list
    if (!list){
      return undefined;
    //0 references the first value
    } else if (n === 0){
      return list.value;
    //returns the element at the given position in the list
    } else {
      return nth(list.rest, n - 1)
    }
};

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// takes two values and returns true only if they are the same value or are objects 
// with the same properties. The values of the properties are equal when compared 
// with a recursive call to deepEqual.

//takes two values to compare
function deepEqual(a, b) {
    if (a === b){
        return true;
    }
    //check if they have values and are both collections
    if (a === null || typeof a !== "object" || b === null || typeof b !== "object"){
        return false;
    }
    //make them both objects
    let keysA = Object.keys(a), keysB = Object.keys(b);
    //check if they have the same size
    if (keysA.length !== keysB.length){
        return false;
    }
    //loop through a to make sure it matches b values
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
          return false;
        }
    }
    return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
