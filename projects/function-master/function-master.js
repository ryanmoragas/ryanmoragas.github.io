//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// should take an object value and return it in an array
function objectValues(object) {
    let array = [];
    for (var key in object){
        array.push(object[key]);
    }
    return array;
} 
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String *** ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object and return it's keys in a string, each key seperated with a space
function keysToString(object) {
    let string = "";
    let array = [];
    for (var key in object){
        array.push(key);
        string = array.join(" ");
    }
    return string;
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take an object and return all its string values in a string, each separated with a space 
function valuesToString(object) {
    let string = "";
    let array = [];
    for (var key in object){
        if (typeof object[key] === typeof 'string')
        array.push(object[key]);
        string = array.join(" ");
    }
    return string;
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return "array";
    } else if (typeof collection === "object"){
        return "object";
    }
    
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
  string = string.split(' ');
  for (let i = 0; i < string.length; i++) {
    string[i] = capitalizeWord(string[i]); 
  }
  return string.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(object) {
    let name = object.name;
    name = capitalizeWord(name)
    let newString = "Welcome " + name + "!";
    return newString;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name and a species and return '<Name> is a <Species>'
function profileInfo(object) {
    let name = capitalizeWord(object.name);
    let species = capitalizeWord(object.species);
    return name + " is a " + species;
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space.
// If there are no noises return 'there are no noises'
function maybeNoises(object) {
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(" ")
    } else {
        return "there are no noises";
    }
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a string of words and a word. Return true if word is in string of words, 
// If word is not in words, return false.
function hasWord(string, word) {
    if (string.includes(word)){
        return true;
    }   else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and add the name to the object's friends array
// then return the object 
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and an object and return true if <name> is a friend of <object> 
// Return false if name is not in the friends object
function isFriend(name, object) {
    if (object.hasOwnProperty("friends")){
     for (let i = 0; i < object.friends.length; i++){
         if(name === object.friends[i]){
             return true;
         }
     }
}return false; 
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take a name and a list of people.
// Return a list of all the names that <name> is not friends with 
function nonFriends(name, array) {
    let nonfriends = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name !== name && array[i].friends.includes(name) === false){
       nonfriends.push(array[i].name);
        }
}return nonfriends;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value.
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it
function updateObject(object, key, value) {
    if (object.hasOwnProperty(key)) {
        object[key] = value;
    } else{
        object[key] = value;
    }
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings
//Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
    for (let key in object) {
        for (let i = 0; i < array.length; i++){
            if (key === array [i]){
                delete object[key];
            }
        }
    }
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed
function dedup(array) {
    var result = []
    for (let i = 0; i < array.length; i++){
       var currentElement = array[i];
       if (!result.includes(currentElement)){
           result.push(array[i]);
       }
}return result;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}