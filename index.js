// How do we assign a value to a variable?
let variable = value;
// How do we change the value of a variable?
variable = newValue;
// How do we assign an existing variable to a new variable?
let newVariable = oldVariable;
// Remind me, what are declare, assign, and define?
let declarevariable; 
or function addNumber(nums) { }

declarevariable = assignedvalue

// What is pseudocoding and why should you do it?
writing down the steps needed to complete the code


//Part B.
// Create a variable called firstVariable
let firstVariable;
// Assign it the value of the string "Hello World"
firstVariable = "Hello World"
// Change the value of this variable to some number
firstVariable = 35
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "Bye world!"
// What is the value of firstVariable?
console.log(firstVariable)  //35
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let yourName = "Ayesha"
console.log("Hello, my name is", yourName)

//Part C.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log((a + b) == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log((a * a) == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

//Part 4.
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."

let animal = "cow"
if (animal == "cow")
  console.log("mooooooo")
else
  console.log("Hey! You're no a cow")

// part 5
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 20
if (age >= 16)
  console.log("Here are the keys!")
else
  console.log("Sorry, you're too young.")
