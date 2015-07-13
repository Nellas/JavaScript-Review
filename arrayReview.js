var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr) {
  return arr[arr.length - 1];
}

console.log('\nThe last item in the array is:', last(threeItems));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function removeOdds(array) {
    for (i = array.length - 1; i >= 0; i--) {
        if (array[i] % 2 !== 0) {
            array.splice(i, 1);
        }
    } return array;
}

console.log('\nThe array with all odd nunbers removed is', removeOdds(evenArray));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function isItThere(array) {
    num = getRandomArbitrary();
    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return console.log('\nTrue!', num, 'is in ', array);
        }
    } return console.log('\nFalse!', num, 'is not in ', array);
}



isItThere(randomArray);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

function createSecond(arr, newArr) {
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    } newArr.splice(newArr.length, 0, 6, 7);
      return newArr;
}

createSecond(first, second);
console.log('\nFirst array:', first); //[1,2,3,4,5];
console.log('\nSecond array:', second); //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = 0;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

console.log('\nThe longest word in the sentence is', longest(sentence));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?



function capitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log('\nThe capitalized poem:', capitalize(myPoem));



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(string) {
    var theVowels = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt([i]) === 'a' || string.charAt([i]) === 'e' || string.charAt([i]) === 'i' || string.charAt([i]) === 'o' || string.charAt([i]) === 'u') {
            theVowels += 1;
        }
    } return theVowels;
}

console.log('\nThere are ', vowelCounter(theOdyssey), 'vowels');
