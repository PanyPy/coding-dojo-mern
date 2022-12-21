// GIVEN
console.log(example);
var example = "I'm the example!";

// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// GIVEN
console.log(hello);                                  
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';


// GIVEN
var needle = 'haystack';
test();
function test(){
  var needle = 'magnet';
  console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle;
// function test()
// needle = 'haystack';
// var needle;
// needle = 'magnet';
// console.log(needle); //logs magnet


// GIVEN
var brendan = 'super cool';
function print(){
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan;
// print()
// brendan = 'super cool';
// console.log(brendan); //logs super cool



// GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food;
// eat();
// food = 'chicken';
// console.log(food) //logs 'chicken'
// var food;
// food = 'half-chicken';
// console.log(food) //logs 'half-chicken'
// food = 'gone';



// GIVEN
mean();
console.log(food);
var mean = function() {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean;
// mean(); // mean is not a function
//dies


// GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// rewind();
// console.log(genre); // logs undefined
// var genre;
// genre = "rock";
// console.log(genre); // logs 'rock'
// genre = "r&b";
// console.log(genre); // logs 'r&b'
// console.log(genre); // logs 'disco'


// GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// var dojo;
// learn();
// dojo = "san jose";
// console.log(dojo); //logs 'san jose'
// dojo = "seattle";
// console.log(dojo); //logs 'seattle'
// dojo = "burbank";
// console.log(dojo); //logs 'burbank'
// console.log(dojo); //logs 'san jose'

// GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if(dojo.students > 50){
    dojo.hiring = true;
  }
  else if(dojo.students <= 0){
    dojo = "closed for now";
  }
  return dojo;
}
// AFTER HOISTING BY THE INTERPRETER
// makeDojo()
// console.log(makeDojo("Chicago", 65)); // logs {name: 'Chicago', students: 65, hiring: true}
// console.log(makeDojo("Berkeley", 0)); // error: assigment to constant variable