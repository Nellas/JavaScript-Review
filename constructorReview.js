//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

function Animal(species, name, legs, color, food) {
  this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = [food];
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

function person(name, age, height, gender) {
    return {
        name: name,
        age: age,
        height: height,
        gender: gender
    };
}

//Create a animal array and a person array.

var animal = [];
var people = [];


//Create two instances of Animal and push those into your animal array

var cat = new Animal('house', 'loki', 4, 'tux', 'raw diet');
var giraffe = new Animal('mammal', 'geoff', 4, 'yellow', 'herb');

animal.push(cat, giraffe);

//Create two instances of person and push those into your person array.

var matt = person('Matt', 22, '6 feet 2 inches', 'M');
var ali = person('Ali', 24, '5 feet, 0 inches', 'F');

people.push(matt, ali);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
    return this.name + ' ate ' + this.food[0];
};

//At this point, if we wanted to add something to every instance of person could we?

  //Yes or no? and why or why not?
    // no.  It is not a constructor function so the function would have to be redefined.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
        - A new object is created with the values you provide.
  2) What's a good way to describe the keyword 'this'
        - It refers to it's parent object.  It works like a pronoun.  "Cindy stayed home because she is sick" vs "Cindy stayed home because Cindy is sick."  "She"  is like the keyword this.
  3) Can a normal function which creates an object and then returns that object use the prototype?
        - Yes.
  4) What happens if you forget to use 'new' when calling a constructor?
        - There are errors!  Object is not created.
*/