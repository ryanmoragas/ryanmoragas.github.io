/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create variable named 'animal' assigned to empty object
var animal = {};
animal.species = "dog"; //use dot notation to assign species to animal with property
//use bracket notation to give animal property called name with a name value
animal['name'] = "Bob";
//using either notation give animal property of noises with empty array value
animal.noises = [];
console.log(animal);//print animal with console.log

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; //create variable noises assigned to empty array
//using bracket notation give noises its first element representing a sound
noises[0]= 'bark';
noises.push('woof');//use array function to assign another noise
noises.unshift('growl'); //array function to assign another noise to front
//using bracket syntax assign another noise to noises at the end
noises[noises.length] = "howl";
//console.log length of noises
console.log(noises.length);
//console.log last element in noises again without hard coding the index
console.log(noises[noises.length - 1]);
//consoloe.log whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//animal.noises assigned to noises array using bracket syntax
animal['noises']= noises;
//any syntax to add another noise  to noises propert in animal
animal.noises.push("whimper");
/* *******************************************************************
* Step 4 - Review
*
* 1. What are the different ways you can access properties on objects?
* // dot and bracket notation
* 2. What are the different ways of accessing elements on arrays?
* //bracket notation
* *******************************************************************
*/
/* *******************************************************************
* Step 5 - Take a Break!
*
* It's super important to give your brain and yourself
* a rest when you can! Grab a drink and have a think!
* For like 10 minutes, then, BACK TO WORK! :slightly_smiling_face:
* *******************************************************************
*/
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []; //create variable animals assigned to empty array
//push created animal to animals
animals.push(animal);
console.log(animals);
//create a variable named duck
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
//push duck into animals then console.log animals
animals.push(duck);
console.log(animals);
//create two more animal species with names and two sounds
var elephant = {species: 'elephant', name: 'Dumbo', noises: ['blow', 'squeel']};
var cat = {species: 'cat', name: 'Jeff', noises: ['meow', 'hiss']};
//add both animals to animals
animals.push(elephant,cat);
console.log(animals);
console.log(animals.length); // console.log animals and animals length
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose a data stucture for list of friends
var friends = [];
// we assigned friends to an array because the order of friends is unimportant. index ordering is fine
//write function getRandom that takes animals array and returns index of random elements using Math.random
function getRandom(array){
   return Math.floor(Math.random() * Math.floor(array.length -1));
}
//using random index from this function get a random animal and add it's name to friends

console.log(friends);
//add friends as a property named friends on one of the animals in the animals
animals[0]["friends"] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
