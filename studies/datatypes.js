/*
* DATA TYPES:
*
* Data types are types of values that we use in JavaScript. There are two different 
* types of datatypes that we use in JavaScript, simple and complex.
*/

// 1. Numbers //
/* 
* Numbers are a simple type of data type. Numbers represent any type of number, 
* wether it is positive, negative, or a decimal. They are created by simple typing 
* the numeric value that you wish to be represented.
*/
var number = 5; // the variable was initialized to represent the numeric number of 5

// 2. Strings //
/* 
* Strings are another type of simple datatypes that represent any string of 
* characters that you wish to represent in your code. They can represent names, 
* addresses, sentences etc. To create a string datatype you simply wrap the 
* characters you want in '' or "", just be sure that you use the quotations 
* you use to wrap the charters in is consistent.
*/
var string = "This is a string."; //initializing a string variable

// 3. Booleans //
/*
* Booleans are another type of simple datatype in JavaScript. Booleans only have
* two possible values, true or false. Booleans are often used to control the flow
* of our code.
*/
var boolean = 1 === 1; //initializing a boolean value comparing two numeric values
console.log(boolean); // prints => true, since the numeric values are the same
var booleanTwo = 1 === 2;
console.log(booleanTwo); //prints => false, since the values don't strictly equal each other

// 4. Arrays //
/*
* Arrarys are a complex data type. They are used to store multiple different data
* types, and are contained in square brackets [ ]. we refer to arrays as collections,
* because the collect other types of data. These collections of data are 0 indexed,
* meaning that the are held in a numeric order starting with 0, then 1, the 2 etc.
*/
var array = []; //initializing and array literal
array = [5, "string", true, []]; // reassigning the array to contain other data types

// 5. Objects //
/*
* Objects are also complex data types. Like arrays, the can store multiple different
* data types. Unlike arrays, objects are not ordered and they do not have an index. Objects
* are collections of key/value pairs, which means each set of value is stored to a key of
* a string, instead of an index number.
*/
var object = {}; //initializing an object literal
object = {       //the object var is now assigned 2 values with 2 different keys
    nameFirst: "Ryan",
    nameLast: "Moragas"
};

// 6. Functions //
/*
* Functions are instructions that we give our computer to execute and can be applied
* to any value that we give it. Functions allow us to encapsulate a block of code
* and execute it wherever we want, however many times we want. This lets us save time 
* by not having to write a new code everytime we want to perform a certain action.
*/
function functionName (param) {
    //function body; code to execute goes here
};
// ^^ functions are given a name, parameters to use, and code to execute.
function add (a, b) {
    sum = a + b;
    return sum;
};
// ^^ function named add will add the two parameters and return the sum
add(2,6);// calling on the add function to add 2 and 6 => returns 8.

// 7. undefined //
/*
* Undefined translates into "value is not assigned". If a variable is declared but 
* not assigned, it's value will be undefined.
*/
var undefine;
console.log(undefine); // prints => undefined. Sine the var wasn't assigned, it has no value.

// 8. null //
/* 
* Null is similar to undefined, but it is an intentional absence of value that must be 
* assigned. It's value means no value, or nullified by programmer.
*/
var absence = null; // here we are declaring a variable and deliberately nullifying it's value.

// 9. NaN //
/*
* NaN simply refers to 'not a number'. It is uaually a returned value when math functions
* fail and cannot output a numeric answer. the isNaN() function can be used to see if a 
* certain value is not a number.
*/
isNaN(2); // prints => false, since 2 is a number
isNaN("two"); // prints => true, since the string of two is not a number

// 10. Primitive/simple and complex data types //
/*
* The two types of data types are classified as either simple/primitive or complex. 
* 
* (1) Simple/primitive datatypes include numbers, strings, booleans, Nan, null, and undefined
* values. They are considered simple because they don't hold or collect other values, and operations
* on them return new simple values. Primtive values are passed to functions by copy, meaning
* their value is copied from one variable to the next.
*
* (2) Complex data types include arrays, objects, and functions. The are considered complex because 
* the aggregate other values, and are indefinite in size. Complex values are passed to functions
* by reference.
*/
var firstName = "Ryan";
var fullName = firstName + " Moragas"; // firstName value is copied into a new variable
console.log(fullName); 
// ^^ operations on primitive values return new primitive values
var fullName = "John Doe";
console.log(firstName); // prints => Ryan; changing the value in fullName doesn't affect firstName

var myArr = [1, 2, 3]; // myArr stores a reference to the location in memory holding 1, 2 and 3
myArr.push(4, 5); // pushes values 4 and 5 into myArr
console.log(myArr); // prints => [1, 2, 3, 4, 5]
var newArr = myArr; // value stored in newArr is a reference to myArr
newArr.push(6);
console.log(myArr); // prints => [1, 2, 3, 4, 5, 6,]
// changing the value at newArr affects all references because its value is referenced to the same array