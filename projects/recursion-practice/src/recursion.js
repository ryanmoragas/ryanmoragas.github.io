// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //set base case to 1
  if (n === 0) {
    return 1;
  } else if (n < 0){
    //return null if n is a negative number
    return null;
  }
  //set recursive case to subtract 1 from n until 0
  return n * factorial(n - 1)
};


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //set base case to stop when array is empty
  if (array.length === 0)
    return 0;
  //set recusive case to add each value in array while removing it from parameter
  return array[0] + sum(array.slice(1));
};


// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  
};


// 4. Check if a number is even.
var isEven = function(n){
  if (n === 0)
    return true;
  else if (n === 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case to return 0 once n is 0
  if (n === 0) {
      return 0;
  } else if (n < 0){
    //if negative count up while adding
    return (n + 1) + sumBelow(n + 1);
  } else {
    //if positive count down while adding
    return (n - 1) + sumBelow(n - 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //base case
    if (x === y || y - 1 === x || x - 1 === y){
      return [];
    //retrun array with values between x and y
    } else if (x > y){
      return [x - 1].concat(range(x - 1, y))
    }
    return [x + 1].concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
 // create a base statement
  if(exp === 0) {
     return 1;
  // if  the exp is less than 0
  } else if ( exp < 0) {
    // return base times by the exp - 1
    return 1/(base * exponent(base , -exp - 1));
  } else {
    return base * exponent(base, exp - 1);
  }
}

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case of n === 0 false
  if (n === 0){
    return false;
    //base case of n === 1 true
  } else if (n === 1){
    return true;
    //dividing by 2 until base case is reached
  } else {
    return powerOfTwo(n/2);
  }
}

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base case of string being empty
  if (string === "") {
    return "";
  } else {
    //recursive case taking first index andding it to the end of the string
    return reverse(string.substr(1)) + string[0];
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //make a new string that ignores spaces and capital letters
  var newString = string.replace(/ /g,"").toLowerCase()
  // base case for if string has 1 or 0 charcters left, return true
  if (newString.length === 0 || newString.length === 1) {
    return true;
  //if first and last indexes match, call palindrome again with indexes removed 
  } else if (newString[0] === newString[newString.length - 1]) {
    return palindrome(newString.slice(1, newString.length - 1));
  }
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y){
    if (x === 0 || y === 0){
      return 0;
    } else if (y < 0){
      return -x + multiply(x, y + 1)
    } else {
      return x + multiply(x, y - 1);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //base case if both str.length is 0 return true
  if (str1.length === 0 && str2.length === 0){
    return true
  //if first indexes of each string match, remove them and call again
  } else if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1))
  }
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //set base case to return an empty array when string is empty
  if(str.length === 0) {
    return [];
  }
  // join all future arrays while recalling createArray and removing first index or string
  return [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  //set base case to return an empty array if length is 0
  if(array.length === 0) {
    return [];
  } 
  //push the first value from array to the end of reverse
  return [(array.pop())].concat(reverseArr(array.slice(0)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //set base case to return empty array if value is 0
  if (length === 0){
    return [];
  } else {
    //build new array and concat while recalloing the function with 1 less length
    return [value].concat(buildList(value, length - 1))
  }
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  //if array length is 0, return the array
  if(array.length === 0) { 
    	return 0;
   }
   // return the first index in array as value, and repeat while removing that index each time
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //base case to call the function on the last value in array
  if(array.length === 1) { 
  	return callback(array); 
  }
  //apply the function to each element in the array while removing that element next iteration
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //base case to return null if n is negative
  if(n < 0) {
    return null;
  // return 1 when n is 1
  } else if(n === 1) {
		return 1;
	}
	//return n - 1 while adding it to n - 2
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //return empth array if base case length is 0
  if(input.length === 0) {
    return [];
  }
  //return each indexed value in caps while recalling without that index
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  //create blank array to return ib base case length is 0
  let result = [];
  if(array.length === 0) { 
    return result; 
  } else {
    //return each index with the first letter caps, while recalling without that index
    return [array[0].charAt(0).toUpperCase() + array[0].slice(1)]
    .concat(capitalizeFirst(array.slice(1)));
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  //create base case to return obj when string is empty
  if (str.length === 0) {
    return obj;
  //if object has property of letter, add 1 to tally while removing it from the string
  } else if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
    return letterTally(str.slice(1), obj);
  //if object doesn't have the property, give the propety with a value of 1
  } else { 
      obj[str[0]] = 1;
  }
    return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //return the array when the length is 0
  if (list.length === 0) { 
    return [];
  //if value is not already in array, push into the new array
  } else if (list[0] !== list[1]) { 
    //return the call by remving the value previously checked for
    return[(list[0])].concat(compress(list.slice(1)));
  } else {
    return compress(list.slice(1));
  }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //set base case to return empty array when length is 0
  if (array.length === 0) { 
    return [];
  // if first value isn't 0, return it in new array while calling function without that value
  } else if (array[0] !== array[1]) {
    return [(array[0])].concat(minimizeZeroes(array.slice(1)));
  // if value is another 0, recall the function without that value
  } else {
    return minimizeZeroes(array.slice(1));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //create a new array to return
  let arr = [];
  //base case to return when array length is 0
  if(array.length === 0){
    return arr;
  // if array is on an even index, push the positive form of the value
  } else if (array.length % 2 === 0){
    arr.push(Math.abs(array[0]))
  // if array is on an odd index, push the negative form of the value
  } else if (array.length % 2 === 1){
    arr.push(-Math.abs(array[0]))
  }
  //recall the function without the value previously pushed into the new array
  return arr.concat(alternateSign(array.slice(1)))
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str)  {
  //make new string to return
  var string = "";
  //make reference for number values
  var numRef = {0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"};
  //base case for when string is empty
  if (str.length === 0) {
    return "";
  // if value equals key in numRef, replace with numeric value and push to string
  } else if (numRef[str[0]]) {
    string += numRef[str[0]] + numToText(str.slice(1));
  // if value doesn't match numRef key, push to return string
  } else {
    string += str[0] + numToText(str.slice(1));
  }
  return string;
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
