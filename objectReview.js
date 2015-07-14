//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
    band: 'rbf',
    food: 'wings',
    person: 'wife',
    book: 'WoT',
    movie: 'V for V',
    holiday: 'xmas!'
};

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Nissan';
favoriteThings.brand = 'Blizzard';

//Now change the food key in your favoriteThings object to be 'Steak' and change the book key in your favoriteThings object to be 'Harry Potter'.

favoriteThings.food = 'Steak';
favoriteThings.book = 'Harry Potter';


//Now, alert your favorite person, then alert your favorite book.
console.log('\n');
console.log('Favorite Person: ', favoriteThings.person, '\nFavorite Book: ', favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for (i in user) {
    if (!user[i]) {
        delete(user[i]);
    }
}


//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Luke';
user.pwHash = 'MD5';
user.username = 'Nellas';

//Now console.log your object and make sure it looks right.

console.log('\nNew user object: ', user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
    console.log('\nAlerting Hello!');
};

methodCollection.logHello = function() {
    console.log('Logging Hello');
};


//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler(string) {
    var vowelObject = {};
    var theAs = 0;
    var theEs = 0;
    var theIs = 0;
    var theOs = 0;
    var theUs = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt([i]) === 'a') {
            theAs += 1;
        } else if (string.charAt([i]) === 'e') {
            theEs += 1;
        } else if (string.charAt([i]) === 'i') {
            theIs += 1;
        } else if (string.charAt([i]) === 'o') {
            theOs += 1;
        } else if (string.charAt([i]) === 'u') {
            theUs += 1;
        }
    }
    vowelObject.a = theAs;
    vowelObject.e = theEs;
    vowelObject.i = theIs;
    vowelObject.o = theOs;
    vowelObject.u = theUs;
    for (var j in vowelObject) {
        if (vowelObject[j] === 0) {
            delete(vowelObject[j]);
        }
    }
    return vowelObject;
}

var vowelObject = voweler('This is a test');

console.log('\nThe vowel count in the sting is: ', vowelObject);