/*
* LOOPS:
*
* Loops are built in constructs that allow us to execute blocks of code as many times
* as we need. They are mostly used to iterate over collections of data. Using loops 
* allows us to pull out individual values to work with one by one.
*/

// 1. while, for, and for-in loops //
/*
* There are three different types of loops that we can use to access data. 
*
* (1) While loops are most fitting for wanting to loop while a conditiong is TRUE, 
* or wether you want to repeat a loop, but not for a definite number of times.
*
* (2) For loops are most fitting for when we want to loop for a specific ammount of 
* times. They include a starting condition, a stopping condition, and an incrementor.
*
* (3) For-in loops are used to access values in objects. These loops pull out keys in an 
* object one by one. This will allow us to access the values stored at that certain key.
*/
var count = 1;
while (count <= 5){
     console.log(count);
     count++;
 }; // prints => 1, 2, 3, 4, 5
// ^^ Here we create a while loop and have it loop up until we reach the numeric value greater than 5

for (var i = 1; i <= 5; i++){
    console.log(i);
}; // prints => 1, 2, 3, 4, 5, 
// ^^ Here we get the same results that we got with our while loop, but used a for loop
 
/*
for (var key in object){
    console.log(key);
};
*/
// ^^ Here we have created a for in loop, and have it printing each key in the object one by one

/*
for (var key in object){
    console.log(object[key]);
};
*/
// ^^ Here we have another for in loop, but have it printing the value in each key in the object one by one

// 2.Looping any number of times, forward counting up to some limit, backward counting down to 0 //
/* 
* When using while or for loops, you can loop how aver many times you'd like, in any direction
* you'd like to loop. Just be sure to state the correct stopping condition so that your loop 
* doesn't go infinitely and crash the program
*/
for (i = 0; i <= 5; i++){
    console.log(i);
}; //  this loop will count up from 0 until we hit a number greater than 5

for (i = 5; i >= 0; i--){
    console.log(i);
}; // this loop will count down until we hit a negative number

// 3. Looping over Arrays, forwards and backwards //
//We can use while and for loops to access values in arrays.
var myArray = [1, 2, 3, 4,];
for (var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}; // prints => 1, 2, 3, 4
// ^^ Here we used a for loop to get each value in the array from the beginning to th end

var myArray = [1, 2, 3, 4,];
for (var i = myArray.length-1; i >= 0; i--){
    console.log(myArray[i]);
}; // prints => 4, 3, 2, 1
// ^^ Here we used a for loop to print all of the myArray values, but from the end to the beginning

// 4. Loop over an Object //
/*
* We can also loop over objects to access certain values. To do this we must use for-in
* loops. For-in loops can return keys in objects, and we can also use them to return 
* the values in those keys.
*/
var myName = {
    nameFirst: "Ryan",
    nameMiddle: "Joel",
    nameLast: "Moragas"
};
for (var key in myName){
    console.log(key);
}; // prints => nameFirst, nameMiddle, nameLast
// ^^ we used a for-in loop to return all of the keys in the object myName
for (var key in myName){
    console.log(myName[key]);
}; // prints => Ryan, Joel, Moragas
// ^^ here we used a for-in loop to return the values in each key in myName