/*
* CONTROL FLOW:
* 
* Code is run in order from the first line in the file to the last line, unless the 
* computer runs across structures that change the control flow, such as conditionals and 
* loops. We can use these conditional statements to manipulate how the code flows 
* throughout our program. We use boolean values to decie what code runs if the answer
* is true or false.
*/

// 1. If //
// If statements ask the computer 'If this value is true or false, run this code'
var timeOfDay = 17;
if (timeOfDay < 10) {
    console.log("Good morning!");
}
/* 
* This conditional statment tells the computer that if the time of day is earlier
* than 10, print Good morning! to the console. Since we have set the time of day to
* be 18, the if statement is false, and therefore will not execute.
*/

// 2. Else-if //
    else if (timeOfDay >= 10 && timeOfDay<= 13) {
    console.log("Good afternoon!");
}   
    else if (timeOfDay >= 3 && timeOfDay<= 18) {
    console.log("Good evening!");
}
/* 
* If the initial if statement is not tru and does not execute, we can list additional
* else if statements. The computer will continue to run through the conditional statement
* until it hits one that will be true. Since we set the time of day to equal 17 (military
* time for 5pm), the second else if statement is activated, and the string Good evening!
* is logged to the console. After this action, the computer is done with the loop and the
* rest of the contitional statement is irrelevant.
*/

// 3. Else //
    else {
    console.log("Good night!");
}
/*
* Else statements are also known as default statements. They do not need a condition to
* be activated, since the will automatically be triggered if none of the if else if
* statements return a true boolean value. This is to ensure that the loop will result
* in an action no matter what.
*/

// 4. Switch //
/*
* Normally if else statments are used, but sometimes it makes mfor cleaner code to use
* switch statements. These statements evaluate an inout expression, matching it to a 
* case clause, and then executes the code with that specific case. A break statement
* is used at the end of each case, ensuring that the next block of code doesn't 
* get executed after the condition is met.
*/
var number = 3;

switch (number) {
    case 1:
        console.log("The number was 1");
        break;
    case 2:
        console.log("The number was 2");
        break;
    case 3:
        console.log("The number was 3");
        break;
    default:
        console.log("The number is not recognized");
} // prints => The number was 3
/*
* Above we have made a switch statement that will run through multiple numbers until
* it hits the specific number in the switch statement. Since we set the number variable
* to have a numeric value of 3, the switch statement will execute and print the specified
* output to the console. If none of the numbers in the case statements would have been 
* triggered, the default case would have been met and triggered the default output
*/