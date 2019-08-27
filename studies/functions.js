/*
* FUNCTIONS:
*
* functions are instructions that we give our computer to execute and can be applied
* to any value that we give it. Functions allow us to encapsulate a block of code
* and execute it wherever we want, however many times we want. This lets us save time 
* by not having to write a new code everytime we want to perform a certain action.
*/

// 1. The two phases to using functions //
/* 
* Theres are two key phases of using functions. The first phase is the declaration/
* definition phase. This involves creating the function and giving it parameters. The
* second phase is invocationg/calling/executing/applying, which is when the function
* is actually being used.
*/
function add (numOne, numTwo) {
    sum = numOne + numTwo;
    return sum;
};
// ^^ Here we declare the function and assign it the name of add
add (3, 9) // returns => 12
// ^^ Here we call the add function and use it passing through the values of 3 and 9

// 2. Parameters vs arguments PASSED to a function
/*
* Parameters are used in functions to hold the place for values that will be pushed through
* later. They are usually named to give the user an idea of what time of data to push though.
* The arguments passed to a function are the values used in the code of the function body. The
* function is not ran until it has arguments passed to it.
*/
function fullName(firstName,lastName){ //this is assigning 2 parameters to the function
    return firstName + " " + lastName;
};
fullName("Ryan", "Moragas"); // here we use the function by calling it and giving it values to use

// 3. Syntax for a NAMED function //
/* 
* Functions are declared using the keyword function, and then ne name of the function. 
* They then get assigned any number of inputs to be pushed through the function in 
* parentheses after the function name. We call these input parameters, and they act as 
* placeholders of values. Finally, we put the function body in curly brackets after the
* parameters. This will contain the code that we want to pass there parameters through, 
* and what output will be returned. By default functions will return undefined.
*/
function subtr(numOne, numTwo){
    var diff = numOne - numTwo;
    return diff;}
/* ^^ Here we use the function keyword, name it subtr, give it parameters of numOne and
* numTwo, and then in the function body tell the code to return the difference of the 
* two numbers passed through it.*/

// 4. Assigning a function to a variable //

/*
*Since variables are just containers for information, we can also assign functions to 
* variables. This can be especially useful when accessing functions that are nested 
* inside other functions.
*/

function constantNum(num) {
    return function checkedNum(numTwo) {
        if (num < numTwo){
            return true;
        } else {
            return false;
        }
    }
}
// ^^ creates a function that returns another function
var greaterThanFive = constantNum(5); // assigns the outer function to a variable
greaterThanFive(4); // uses the variable to call the inner function
// ^^ since 4 is not greater than 5, the function returns false

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value //
/*
* Functions can operate with or without inputs and outputs. If a function doesn't have
* any inputs it will give the return value by default. If a function does not have
* an output, it will automatically return undefined
*/
function funct() {
    console.log("This is the output");
    }
funct(); // prints => This is the output
// ^^ Since it has no parameters it will return the same output everytime
function functTwo(){};
functTwo(); // returns undefined

// 6. Scope //
/*
* Scope refers to what sections of code variables and constants are available. There
* are two types of scopes, global and local. Global is everything outside of functions. 
* Each function creates a new scope, and conditional statements and loops also create 
* their own block scope. Scope determines the accessibility of these variables.
* Variables defined inside a function are not accessible from outside the function.
*/
var myVar = "variable"; // this is in the global scope

function myFunc(){ 
    let functionVariable = "red" // variables inside of this function is in a local scope
    if (true){ 
        console.log(true); // values in these conditional statements have their own block scope
    } else {
        console.log(false);
    }
}
// console.log(functionVaraible); => reference error

// ^^ since we used let to initialize the variable indise of the function it's value
// is contained to the local scope of the function

// 7. Closures //
/*
* A closure gives you access to an outer function's scope from an inner function. 
* In JavaScript, closures are created every time a function is created, at function 
* creation time. To use a closure, define a function inside another function and expose 
* it. Calling on the function will also access variables in the parent scope.
*/
var firstName = "Ryan";
var lastName = "Moragas";

function showName (firstName, lastName) {
let nameIntro = "My name is ";
 return function makeFullName () {        
return nameIntro + firstName + " " + lastName;   
  }
};
// console.log(nameIntro); => reference error, since global scope doesn't have access to nameInto

var myNameIntro = showName (firstName, lastName); 
// ^^ Assigning myNameIntro variable to showName function
myNameIntro ();
// ^^ using the makeFullName function inside the showName function
/* 
* Since the variable nameIntro is initialized inside of the showName function, normally
* we would not be able to use it in the global function. Having another function 
* inside of the showName function means that the inner function will still have access 
* to variables in the parent function's scope. This is how we were able to access that
* variable nameIntro and use it in the inner function that we executed.
*/
 
