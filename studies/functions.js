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
    //function code here
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
    sum = numOne - numTwo;
    return diff;}
/* ^^ Here we use the function keyword, name it subtr, give it parameters of numOne and
* numTwo, and then in the function body tell the code to return the difference of the 
* two numbers passed through it.*/

// 4. Assigning a function to a variable //
/*
* Since variables are just containers for information, we can assign functions to variables.
* This can be especially handy when trying to access functions inside of functions.
*/


// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value //

// 6. Scope //

// 7. Closures //