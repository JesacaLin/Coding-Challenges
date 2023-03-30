// let people = ["Greg", "Mary", "Devon", "James"];
// Using a loop, iterate through this array and console.log all of the people.
// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// Write the command to remove "Greg" from the array.
// people.shift();
// console.log(people);

// Write the command to remove "James" from the array.
// people.pop()
// console.log(people);

// Write the command to add "Matt" to the front of the array.
// people.unshift('Matt');
// console.log(people);

// Write the command to add your name to the end of the array.
// people.push('Jesaca')
// console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
// let i = 0;
// while (i < people.length){
//     console.log(people[i]);
//     if(people[i] === 'Mary') break;
//     i++
// }

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// console.log(people);
// let newPeople = people.slice(2);
// console.log(newPeople);

// Write the command that gives the indexOf where "Mary" is located.
// console.log(people.indexOf("Mary"));

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
// console.log(people.indexOf("Foo"));
// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// let withBob = people.concat("Bob");
// console.log(withBob);

// let programming = {
//   languages: ["JavaScript", "Python", "Ruby"],
//   isChallenging: true,
//   isRewarding: true,
//   difficulty: 8,
//   jokes:
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// };
// Write the command to add the language "Go" to the end of the languages array.
// programming.languages.push("Go");
// console.log(programming);

// Change the difficulty to the value of 7.
// programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
// delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object.
// programming["isFun"] = true;

// Using a loop, iterate through the languages array and console.log all of the languages.
// let langs = programming.languages;
// for (let i = 0; i < langs.length; i++) {
//   console.log(langs[i]);
// }

// Using a loop, console.log all of the keys in the programming object.
// for (let key in programming) {
//   console.log(key);
// }

// Using a loop, console.log all of the values in the programming object.
// for (let key in programming) {
//   console.log(programming[key]);
// }

// console.log(programming);

// Part 1
// difference
// this function takes in two parameters and returns the difference of the two;
// difference(2,2); // 0
// difference(0,2); // -2

// product
// this function takes in two parameters and returns the product of the two;
// const product = (num1, num2) => console.log(num1*num2);
// product(2,2); // 4
// product(0,2); // 0

// printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
// const printDay = num =>{
//     switch(num) {
//         case 1:
//           return "Sunday";
//         case 2:
//           return "Monday";
//         case 3:
//           return "Tuesday";
//         case 4:
//           return "Wednesday";
//         case 5:
//           return "Thursday";
//         case 6:
//           return "Friday";
//         case 7:
//           return "Saturday";
//         default:
//           return undefined;
//       }
// }

// console.log(printDay(4)); // "Wednesday"
// console.log(printDay(41)); // undefined

// lastElement
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
// const lastElement = (arr) =>{
//     if (!arr.length) return undefined;
//     return arr[arr.length -1]
// }

// console.log(lastElement([1,2,3,4])); // 4
// console.log(lastElement([])); // undefined

// numberCompare
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
// const numberCompare = (num1, num2) =>{
//     if(num1 > num2) return 'First is Greater';
//     if(num1 < num2) return 'Second is greater'
//     return 'Numbers are equal'
// }

// console.log(numberCompare(1,1));
// console.log(numberCompare(2,1));
// console.log(numberCompare(1,2));
// numberCompare(1,1); // "Numbers are equal"
// numberCompare(2,1); // "First is greater"
// numberCompare(1,2); // "Second is greater"

// singleLetterCount
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

// const singleLetterCount = (word, letter) => {
//   word = word.toLowerCase();
//   letter = letter.toLowerCase();
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].includes(letter)) {
//       counter++;
//     }
//   }
//   return counter;
// };

// console.log(singleLetterCount("amazing", "A")); // 2
// console.log(singleLetterCount("Rithm School", "o")); // 2

// Part 2
// multipleLetterCount
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

// const multipleLetterCount = (string) =>{
//     const obj = {};
//     for (let i = 0; i < string.length; i++){
//         let currentChar = string[i]
//         if(obj[currentChar]){
//             obj[currentChar]++;
//         } else{
//             obj[currentChar] = 1;
//         }
//     }
//     return obj;
// }

// console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
// console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

// arrayManipulation
// this function should take in at most four parameters (an array, command, location, and value).

// If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)

// If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)

// If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.

// If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr, command, location, value) {
  if (command === "remove" && location === "end") {
    return arr.pop();
  } else if (command === "remove" && location === "beginning") {
    return arr.shift();
  } else if (command === "add" && location === "beginning") {
    arr.unshift(value);
    return arr;
  } else if (command === "add" && location === "end") {
    arr.push(value);
    return arr;
  }
}

// console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
// console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
// console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
// console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

// isPalindrome
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true

//game plan: set pointers to first element and last, iterating and comparing towards the middle.
//edge case: remove whitespace and caps
//iterate through the string
//initalize variable at beginning and end of string
//compare the two

const isPalindrome = (str) => {
  str = str.replace(/\s/g, "").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let start = str[i];
    console.log(start);
    let endIndex = str.length - 1 - i;
    let end = str[endIndex];
    console.log(endIndex);
    console.log(end);
    if (start !== end) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("testing"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("hannah"));
console.log(isPalindrome("robert"));
