var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return '\nCalling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

console.log(callFriend()('435-215-9248'), '\n');



/*

Write a function that accepts a function as it's first argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has been called N number of times, console.log('STAHHP');

*/

var firstFunction = function(paramFunction, N) {
    return function newFunction() {
        for (var i = 0; i < N; i++) {
             paramFunction();

        }
        console.log('STAHHP!');
    }
};

firstFunction(function(){console.log('N = 4.  Code will execute four times.');}, 4)();