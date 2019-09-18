// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-ryanmoragas');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *..
 * 
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./ryanmoragas.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//find the number of males customers
var maleCount = function(array){
    let count = 0;
    //use filter to find number of male customers
    _.filter(array, function(object, index, array){
        if(object.gender === 'male') {
             count++;
        }
        //output a number
    }); return count;
};


//find the number of female customers
var femaleCount = function(array){
    //use reduce to find number of female customers
    let females = _.reduce(array, function(object, index, array){
        if (index.gender === 'female'){
           object++;
        }
        return object;
    }, 0);
    //output number of females
    return females;
};


//find the oldest customers name
var oldestCustomer = function(array){
    let currentAge = 0;
    let customerName;
    _.each (array, function(customer, index, array){
        // loop through the array and find the oldest age and name of oldest customer
        if (customer.age > currentAge){
            currentAge = customer.age;
            customerName = customer.name;
        }
    })
    //return oldest name
    return customerName;
};


//tfind the youngest customers name
var youngestCustomer = function(array){
    let currentAge = 1000;
    let customerName;
    // loop through the array and find the youngest age and name of oldest customer
    _.each (array, function(customer, index, array){
        if (customer.age < currentAge){
            currentAge = customer.age;
            customerName = customer.name;
        }
    })
    //return youngest name
    return customerName;
};


//find the avg balance of all customers
var averageBalance = function(array){
    //use pluck to take only balance values in the array
    let bal = [];
    let avgBal = 0;
    bal = _.pluck (array,'balance');
    //use each to slice from "$", remove ",", and return values as numbers
    _.each (array, function(amount, i, array){
        bal[i] = bal[i].slice(1).split(",").join("")
        bal[i] = parseFloat(bal[i]);
        avgBal += bal[i];
    })
    // / avgBal by total balances added
    avgBal /= bal.length;
    return avgBal;
};


//find how many customers names begin with a certain character
var firstLetterCount = function(array, letter){
    let count = 0;
    //loop through names and add to count if starting char matches letter
    _.each (array, function(element, index, array){
        if (element.name[0].toLowerCase() === letter.toLowerCase()){
            count ++;
        }
    });
    //output number of names with starting char
    return count;
};


//takes array, customer, and letter params
var friendFirstLetterCount = function(array, customer, letter){
    let friends = [];
    //make an array just containing friends 
    _.each (array, function(element, index, array){
        if (element.name.toLowerCase() === customer.toLowerCase()){
            friends = element.friends;
        }
    });
    //make friends array contain only name
    friends = _.pluck(friends,"name");
    
    let count = 0;
    //loop through friend list and count for names that match given letter
    for (var i = 0; i < friends.length; i++){
        if (friends[i][0].toLowerCase() === letter.toLowerCase()){
            count++;
        }
    }
    return count;
};


//Find the customers' names that have a given name in their friends list
var friendsCount = function(customers, name){

    let custFriend = _.map(customers, function(customer, index, customers){
        let customerName;
        let friends = customer.friends; 
        // loop over the friend's list that would be customer.friends
        _.each(friends, function(friend, index, friends){
         //if the given name matches a customer's friend's name
            if(name === friend.name){
            //assign the value, the customer's name; 
                customerName = customer.name; 
            }
        });
        //return the customer's name
        return customerName; 
    });
    //return just names
    return _.filter(custFriend, function(element, index, custFriend){
            if (typeof element === 'string'){
                return element; 
            }
    });

};


//Find the three most common tags among all customers' associated tags
var topThreeTags = function(array){
    //get array of tags
    let tags = _.pluck(array, 'tags');
    tags = tags.join().split(","); 
    // create counter object with each tag as a key with 0 value
    let counter = {};  
     // create a key for each tag with a value matching its frequency
    _.filter(tags, function(element, i, array){
        if (counter.hasOwnProperty(element) === false){
            counter[element] = 0;
        }
        return counter[element] ++ ;
    }); 
    // subtract 1 from all values, remove keys with 0 value
    while (Object.keys(counter).length > 3){
        for (var key in counter){
            counter[key] -- ;
                if (counter[key] < 1){
                    delete counter[key];
                }
        }
    }
  //return the keys
  return Object.keys(counter);
};

//Create a summary of genders
var genderCount = function(array){
    //create object to return
    genderCount={};
    //get number of males
    genderCount.male = _.reduce(array, function(object, index, array){
        if (index.gender === 'male'){
           object++;
        }
        return object;
    }, 0);
    //get number of females
    genderCount.female = _.reduce(array, function(object, index, array){
        if (index.gender === 'female'){
           object++;
        }
        return object;
    }, 0);
    //get number of non-binary
    genderCount['non-binary'] = _.reduce(array, function(object, index, array){
        if (index.gender === 'non-binary'){
           object++;
        }
        return object;
    }, 0);
    //return object
    return genderCount;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
