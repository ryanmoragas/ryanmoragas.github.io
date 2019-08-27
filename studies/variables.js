/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable. Variables should always be named in camelCase.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;
/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'ryan';
console.log(myName); // prints => ryan

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. lets //
/* 
* Like var, let creates containers for reassignable values, however let variables are NOT hoisted 
* to their code block.
*/
let varOne = 1;
varOne = "one";
console.log (varOne); // prints => one

//5. constants //
/* 
* Constants are variables whose values can never be changed. They must be initialized immediately 
* cannot be left unassigned or undefined. They are block scoped, meaning they're pinned to the block
* of code they are initialized in. They are assigned using the const keyword.
*/
let myVar = 7; // initializing a constant variable 
console.log(myVar); // prints => 7
myVar = 8;
console.log(myVar); // returns an error, since reassigning constants is not possible

//6. hoisting //
/*
* Hoisting is JavaScript's default behavior of moving variable declarations to the top of their current
* scope. Hoisting only moves declaration to the top not initializations. Only variables using var are 
* hoisted, let and const variables are not.
*/
console.log(name); // prints => undefined //
var name = "ryan"; //the varaible declaration was hoisted to the top, but not the initialization
//console.log(num); // prints => reference error //
let num = 5; // since let isn't hoisted, the declaration was not available for the previous console.log


