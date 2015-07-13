/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var nums = [1, 2, 3, 4];

function plusOneSum(arr) {
    var newArr = [];
    var answer = 0;
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1);
    }
    for (var j = 0; j < newArr.length; j++) {
        answer += newArr[j];
    } return answer;

}
console.log('\nAll items in the array added together equal:', plusOneSum(nums));
/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/


function flatten(array, result) {
    result === undefined && (result = []);

    for (var i = 0; i < array.length; i++) {
        if (Object.prototype.toString.call(array[i]) === '[object Array]') {
            flatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

console.log('\nThe flattened array is: ', flatten([1, 2, [3, [4], 5, 6], 7]));


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var valueArray = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

function unsortArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].reverse();
    } return arr;
}

console.log(unsortArr(valueArray));

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
function longest(str) {
    var string = str.split(' ');
    var leng = 0;
    var words = [];
    for (var i = 0; i < string.length; i++) {
        if (leng < string[i].length) {
            leng = string[i].length;
            words = [string[i]];
        }
    }
    for (var h = 0; h < string.length; h ++) {
        if (string[h] === leng) {
            words.push(string[h]);
        }
    }
    for (var j = words.length - 1; j >= 0; j--) {
        for (var k = j - 1; k >= 0; k--) {
            if (words[j].toLowerCase() === words[k].toLowerCase()) {
                words.slice(j, 1);
            }
        }
    } return words;
}

console.log('\nThe longest word(s) in the sentence is: ', longest("I gave a present to my parents"));

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function getLargeSum() {
    var threeFiveArray = [];
    var largeSum = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            threeFiveArray.push(i);
        }
    }
    for (var j = 0; j < threeFiveArray.length; j++) {
        largeSum += threeFiveArray[j];
    } return largeSum;
}

console.log('\nThe sum of all the multiples of 3 or 5 below 1000 is: ', getLargeSum());

/*
Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function removeDups(str) {
    string = str.split('');
    for (var i = 0; i < string.length; i++) {
        for (var j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                string.splice(j, 1);
            }
        }
    }
    str = string.join('');
    return str;
}

console.log(removeDups('tree traversal'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(num1, num2) {
    var theSum = 0;
    if (num1 && num2) {
        theSum = num1 + num2;
    } else {
        function newFunc(num3) {
            theSum = num1 + num3;
        }
    } return theSum;
}

console.log(sum(2)(3));
