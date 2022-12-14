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
//II - Loops
// part A.
// The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++)
  console.log(i)
// Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++)
  console.log(i)
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i += 3)
  console.log(i)

//Part B.
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0)
    console.log(i, "<-- is an even number")
  else
    console.log(i)
}

//Part C.
// Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("I found a ", i, "Three is a crowd & High five!")
  }
  else if (i % 5 == 0)
    console.log("I found a ", i, "High five!")
  else if (i % 3 == 0)
    console.log("I found a ", i, "Three is a crowd")
}
//Part D.
// Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

let bank_account = 0;
for (let i = 1; i <= 10; i++)
  bank_account += i;
console.log(bank_account)

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

let bank_account = 0;
for (let i = 1; i <= 100; i++)
  bank_account += i;
bonus = bank_account * 2
console.log(bonus)
// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?
elements
// Do Arrays guarantee those things will be in order?
yes, the order they are entered they will stay in that order
// What real-life thing could you model with an array?
shopping list, list of favorite books, list of places etc.


// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

let quotes = ["live & laugh", "stay positive", "Focus & win"]

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
console.log(randomThings[0])
// Change the value of "Hello"to "World"
for (let i = 1; i < randomThings.length; i++)
  if (randomThings[i] == "Hello")
    randomThings[i] = ("World")

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
console.log(ourClass[2])
// Change the value of "Github" to "Octocat"
for (let i = 1; i < ourClass.length; i++)
  if (ourClass[i] == "Github")
    ourClass[i] = ("Octocat")
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "400")
console.log(myArray)
// Remove the 5from the beginning of the array.
myArray.shift()
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")
// Remove the string of your choice from the end of the array.
myArray.pop()
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
console.log("reveresed Array", myArray)

//yes original array is mutated with the .reverse() method

// F. Biggie Smalls
// Create a variable that contains an integer.
let num = 30
// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if (num < 100)
  console.log("Little Number")
else
  console.log("big Number")


// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let num = 30
if (num < 5)
  console.log("Little Number")
else if (num > 10)
  console.log("Big Number")
else
  console.log("Monkey")

//Part H.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ], [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ], [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".


// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.forEach((el) => {
  if (kristynsCloset[el] == "yellow knit hat") {
    kristynsCloset.splice(el, 1);
    kristynsCloset[el] = "raybans"
  }
})
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][1]}!`)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
for (let i = 0; i < thomsCloset.length; i++) {
  for (let j = 0; j < thomsCloset[i].length; j++) {
    if (thomsCloset[i][j] == "PJs")
      thomsCloset[i][j] = "Footie Pajamas"

  }
}
console.log(thomsCloset)
// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?
const printGreeting = (name) => {
    return `Hello there, ${name}!`
  }
  console.log(printGreeting("Slimer"));
  
  
  // You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
  
  
  
  
  // B. printCool
  // Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
  
  const printCool = (name) => {
    return `${name} is cool`
  }
  console.log(printCool("Slimer"));
  
  
  // C. calculateCube
  // Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
  const calculateCube = (num) => {
    return num * num * num;
  }
  console.log(calculateCube(5));
  
  
  // D. isVowel
  // Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
  const isVowel = (char) => {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
      return true;
    else
      return false;
  
  }
  console.log(isVowel("k"));
  
  // E. getTwoLengths
  // Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
  const getTwoLengths = (string1, string2) => {
    return lengthArray = [string1.length, string2.length];
  }
  console.log(getTwoLengths("Hank", "Hippopopalous"));
  // => [4, 13]
  
  
  
  // F. getMultipleLengths
  // Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
  const getMultipleLengths = (string1) =>
    {
      let lengtharray=[]
      for(let i=0; i<string1.length; i++)
        lengtharray[i]=string1[i].length;
      return lengtharray;
    }
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
  // => [5, 4, 2, 2, 4]
  
  
  
  
  // G. maxOfThree
  // Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
  const maxOfThree = (num1, num2, num3) =>
    {
      if(num1 > num2 && num1 > num3)     
            return num1;    
      else if(num2 > num1 && num2 > num3) 
            return num2;    
      else if(num3 > num1 && num3 > num2)   
            return num3;
      else if(num1==num2 && num1 == num3)
            return num1;
      else if(num1==num2 || num1 == num3)
            return num1;
      else if(num2==num3)
            return num2;
    }
  console.log(maxOfThree(6, 9,1));
  // => 9
  
  // Did you use Google and find Math.max()? If so, great job! Very resourceful???keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
  
  
  
  
  // H. printLongestWord
  // Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
  
  const printLongestWord = (string1) =>
    {
      var max_str = string1[0].length;
      var longestWord = string1[0];
      for(let i=0; i<string1.length; i++) 
      {
          var max_i = string1[i].length;
          if (max_i > max_str) 
          {
              longestWord = string1[i];
              max_str = max_i;
          }
      }
      return longestWord;
    }
  
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  // => "Peanutbutter"
  // Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.



//V.Objects
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user =
{
  name: "Joline",
  email: "Joline@gmail.com",
  age: 20,
  purchased: [],
}


// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
user.email = "Joline@yahoo.com"
console.log(user)
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.age++;



// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "Newark, NJ";


// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
user.purchased.push("carbohydrates", "peace of mind", "Merino jodhpurs");
console.log(user.purchased[2])


// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

{
  name: "Grace Hopper",
    age: 85,
      location: "Dallas, Texas",
        purchased: [],
}
user.friend.purchased.push("The One Ring", "A latte");

console.log(user.friend.purchased[1])
// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++)
  console.log(user.purchased[i])
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.friend.purchased.length; i++)
  console.log(user.friend.purchased[i])


// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

const updateuser = () => {
  user.age++
  user.name = user.name.toUpperCase()
}
updateuser();
// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

const oldAndLoud = (person) => {
  person.age++
  person.name = person.name.toUpperCase()
}
oldAndLoud(user);
// Cat Combinator



// 1. Mama cat
// Define an object called cat1that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed
let cat1 =
{
  name: "Cookie",
  breed: "Persian",
  age: 12,
}
console.log(cat1.age, cat1.breed)



// 2. Papa cat
// Define an object called cat2that also contains the properties:
// name
// breed
// age (a number)

let cat2 =
{
  name: "Tom",
  breed: "Siamese",
  age: 14,
}

// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:

// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }

// { name: "Jam", age: 45, breed: "Siamese" }

// This is to demonstrate that functions can take objects as arguments

// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between
// Example:

// console.log(combineCats(cat1, cat2));
// Result:



// This is to demonstrate that a function can return an object


const combineCats = (cat1, cat2) => {
  let newCat =
  {
    name: cat1.name + cat2.name,
    age: 1,
    breed: cat1.breed.concat("-", cat2.breed),
  }
  return newCat;
}
console.log(combineCats(cat1, cat2));



// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:

newCat1 = combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
newCat2 = combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
console.log(combineCats(newCat1, newCat2));
