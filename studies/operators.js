/*
* OPERATORS:
*
* Operators are what we use to act on out data. The can assign values, compare values
* to other values, or include them in arithmetic operations. Operators are seperated into
* different classes based on what they do and how many operands they require.
*/

// 1. Assignment operators //
/* 
* Assignment operators are used to assign values to variable. They include assignment 
* (=) addition assignment (+=), subtraction assignment	(-=) multiplication assignment	
* (*=), division assignment	(/=), remainder assignment	(%=) etc.
*/
var num = 1; //creates a variable with a value of 1 using the assignment opperator
num += 1; //takes the num variable and adds 2 to it's value
console.log(num); // prints => 3

// 2. Arithmetic operators //
/*
* Arithmetic operators take numerical values (either literals or variables) as their
* operands and return a single numerical value. The standard arithmetic operators are addition 
* (+), subtraction (-), multiplication (*), and division (/). These operators return numeric values.
*/
var numTwo = 5; //initializes numTwo to the numeric value of 5
var product = num * numTwo; // uses the multiplication operator to multiple two vaiables
console.log(product); // prints => 10
numTwo - num; // uses subtraction method to return 2
10 / 2; // uses division method to return 5
/*
* JavaScript has both strict and type–converting comparisons. A strict comparison (===) is only 
* true if the operands are of the same type and the valuess match. The more commonly used 
* abstract comparison (==) converts the operands to the same type before making the comparison. 
* For relational comparisons (<=) (>=) , the operands are converted to simple primitives, then the 
* same type, then compared. The inequality operator (!==) can also be used to make sure that 
* the two compared values are not the same. These operators return boolean values.
*/
num === 2; // returns a true statement, since the num variable is now equal to 2
numTwo === 2; // returns false, since numTwo has a value of 5
numTwo >= num; // returns true, since 5 is greater than 2
numTwo <= num; //returns false, since 5 is not greater than 2
num !== numTwo // returns true, since the numbers do not strictly equal each other

// 4. Logical operators //
/*
* There are three logical operators in javascript. They are or (||), and (&&), and not
* (!). These operators can be used on values of any type.
*/
var hour = 8;
var isWeekend = true;

if (hour < 9 || hour > 18 || isWeekend) {
  console.log("School is closed."); 
} else if (1 === "1" && 1 === 1) {
    console.log("Something is wrong");
}
/*
* Here we give the command that if the hour is less than 10 OR greater than 18 OR if it
* is the weekend, log the output School is closed. We also have a contitional that
* won't print using the && operator, since one of the comparisons are between a 
* string and a number.
*/


// 5. Unary operators (!, typeOf, -) //
/* 
* A unary operatior is an operation with only one operand. The benefits of these operators 
* are that they are more efficient than standart JavaScript function calls, and they are safe 
* because their functionality can't be overridden.
* Unary plus (+)	Tries to convert the operand into a number
* Unary negation (-)    Tries to convert the operand into a number and negates after
* Logical Not (!)	Converts to boolean value, then negates it
* Increment (++)	Adds 1 to its operand
* Decrement (--)	Subtracts 1 from its operand
* Bitwise not (~)	Inverts all the bits in the operand and returns a number
* typeof	Returns a string which is the type of the operand
* delete	Deletes specific index of an array or specific property of an object
* void	Discards a return value of an expression.
*/
+3; // returns 3
+"3"; // uses unary plus to convert the string to a number and retuns 3
!true; // uses the not operator and return a false value
var a = 5; 
a = ++a;// uses the increment operator to add 1 to a, returns 6
var b = 4
b = --b; // uses the decrement operator to take 1 from a, returns 3
typeof 7 // returns number
typeof "seven" // returns string
typeof true // returns boolean
var name = {nameFirst: "Ryan", nameLast: "Moragas"}
delete name[1]             
console.log(name); // deletes the first key and returns { nameLast: 'Moragas' }

// 6. Ternary operator (a ? b : c) //
/*
* The conditional (ternary) operator is the only JavaScript operator that takes three 
* operands. This operator is frequently used as a shortcut for the if statement. The 
* syntax for the ternary operator is (condition) ? (IfTrue) : (IfFalse).
*/

/*
    if ( condition ) {
     //value if true;
    } else {
     //value if false;
    }

    condition ? value if true : value if false

the above lines of code will result in the same output
*/
var username = "RyanMoragas";
var welcomeMessage  = 'Hello ' + (username ? username : 'guest');
console.log(welcomeMessage); // prints => Hello RyanMoragas
/*
* The ternary operator above is being used to make a welcome message. If a username
* exists, the code will return Hello Username. If there is no username, the code will
* return Hello guest.
*/