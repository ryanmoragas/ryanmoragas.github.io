/*
* STRING MANIPULATION:
*
* A string is a sequence of one or more characters that may consist of letters, numbers,
* or symbols. Each character in a JavaScript string can be accessed by an index number, 
* and all strings have methods and properties available to them.
*/

// 1. With operators //
// strings can be manipulated using addition operators in javascript.
var string = "This is a string";
string += " concatenated";
console.log(string); // prints => This is a string concatednated
// ^^ using the additition assignment operator we conected two strings together

// 2. With string methods //
/*
* There are multiple methods that we can use to manipulate string values. These methods
* are saved
*/
console.log(string.length); // prints => 29
// ^^ here we use the length operator to get the number of indexed charcters in the string
var string = "My name is Ryan"
string.charAt(5); //returns character at 5 index, which is 'm'
string.indexOf('e') //returns the index of the specified charcter, being 6
var newString = string.split(" "); // returns ["My", "name", "is", "Ryan"]
// ^^ here we use the split operator and split the string at each empty character into new strings
newString.join("-"); // joins the strings with '-' and returns "My-name-is-Ryan"
string.toUpperCase(); // returns "MY NAME IS RYAN"
// ^^ here we use the toUpperCase operator and turn all characters into capital letters
string.slice(3); // slices at 3rd character and returns "name is Ryan"
var newName = string.replace("Ryan","Bryan"); // replaces "Ryan" with "Bryan"
var name = "Ryan";
name.repeat(3); //repeats the string a specified number of times returning "RyanRyanRyan"

