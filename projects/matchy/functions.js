/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
* Create a function named search that has two parameters, animals and name.
* The function will search in an array (animals) for a certain name in the name key.
* If found, the function will return the object that the name is in, if not 
* found, the function will return null.
*/

function search(animals, name){
    for (var i = 0; i < animals.length; i++)
    if (animals[i].name === name){
        return animals[i];
    } 
        return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
* Create a function named replace that takes 3 parameters, replace, name, and replacement.
* If the animal with the name exists, replace it's entire object with the replacement 
* object, otherwise do nothing
*/

function replace(animals, name, replacement){
    for (var i =0; i < animals.length; i++)
    if (animals[i].name === name){
        animals[i] = replacement;
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* 
* Create function named remove with parameters animals and name. If the animal name
* exists, remove it.
*/

function remove(animals, name){
    for (var i = 0; i < animals.length; i++)
    if (animals[i].name === name){
       animals.splice(i,1);
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
* Create function named add with parameters animals, animal. Function checks if 
* new animals has a name with a length > 0, and has a unique name that no other animals
* have. If all conditions pass it add the new animal object.
*/
function add(animals, animal){
    for (var i = 0; i < animals.length; i++)
    if (animal.name.length > 0 && animal.name !== animals[i].name){
        animals.push(animal);
    } else {
        return null;
    }
}

/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
