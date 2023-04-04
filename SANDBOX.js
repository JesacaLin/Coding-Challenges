/*Fibonacci
The fibonacci sequence is a sequence of numbers whose first and second elements are 1. To generate further elements of the sequence we take the sum of the previous two elements. For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci that takes in a number length and returns the fibonacci sequence up to the given length.*/

//establish the edge cases for length.
//can start Fibonacci with [1, 1] in newArray.
//initial a while loop to iterate through number of integers in length.
//conditions should be if newArray is less than length;
//create variables to store last, second to last, and new values.
//push new element to array
//return the array.

// function fibonacci(length) {}

// console.log(fibonacci(0)); // []
// console.log(fibonacci(1)); // [1]
// console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
// console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]

// function aCounter(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     let char = word[i];

//     if (char === "a" || char === "A") count += 1;
//   }
//   return count;
// }

// console.log(aCounter("apple")); // => 1
// console.log(aCounter("appleapple")); // => 2
// console.log(aCounter("aAapple")); // => 3

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// function caesarCipher(string, num) {
//   // Initialize an empty string to store the modified characters
//   let newString = "";

//   // Iterate over each character in the input string
//   for (let i = 0; i < string.length; i++) {
//     // Store the current character in a variable
//     let currentChar = string[i];
//     console.log(`Current character: ${currentChar}`);

//     // Find the index of the current character in the alphabet string
//     let charIndex = alphabet.indexOf(currentChar);
//     console.log(`Index of current character: ${charIndex}`);

//     // Calculate the index of the shifted character in the alphabet string
//     let newIndex = (charIndex + num) % alphabet.length;
//     console.log(`Index of shifted character: ${newIndex}`);

//     // If the shift resulted in a negative index, add the length of the alphabet string to wrap around to the beginning
//     if (newIndex < 0) newIndex += alphabet.length;

//     // Get the character at the new index in the alphabet string
//     let nextChar = alphabet[newIndex];
//     console.log(`Shifted character: ${nextChar}`);

//     // Add the shifted character to the new string
//     newString += nextChar;
//   }

//   // Return the modified string
//   return newString;
// }

// console.log(caesarCipher("apple", 1));

//TRY THIS AGAIN - TODO
// removeFromString
// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

// Examples:

// removeFromString('Elie', 2, 2) // 'El'
// removeFromString('Elie', 0, 1) // 'lie'
// removeFromString('Rithm School', 0, 6) // 'School'
// removeFromString('Rithm School', 2, 4) // 'RiSchool'
// removeFromString('Rithm School', 6, 400) // 'Rithm '

// let x = [1, 2, 3];
// let y = x.map((num) => {
//   x.push(num + 3);
//   //x:
//   //[1, 2, 3, 4, 5, 6]
//   return num + 1;
//   //y:
//   //[2, 3, 4]
// });

// var data = {
//   code: 42,
//   items: [
//     {
//       id: 1,
//       name: "foo",
//     },
//     {
//       id: 2,
//       name: "bar",
//     },
//   ],
// };

// const nestedArray = data.items[1].name;
// console.log(nestedArray);

// Challenge: Arrays Equivalent? Arrays Equal?
// Given two arrays that contain only numbers, are they “equivalent”?
//(equivalent: do they contain the exact same items, in the same order)

//rephrase: take two arrays and check if they are equivalent, same values at the same indices.

//input: two arrays
//output: boolean value

//test for edge cases - fail fast by compare lengths
//iterate to compare values
//does not have to be nested...can use bracket notation
//if values do not match, return false
//if at the end of iterating, all values have matched, return true;

const a = [1, 2, 3];
const b = [1, 2, 3];
const c = [1, 2, 2, 3];
const d = [2, 1, 3];

const arraysEquivalent = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  //using for loop:
  // for(let i = 0; i < arr1.length; i++){
  //     if (arr1[i] !== arr2[i]) return false;
  //     return true;
  // }

  //using for...of loop:
  for (const [index, num] of arr1.entries()) {
    if (num !== arr2[index]) return false;
  }
  return true;
};

console.log(arraysEquivalent(a, b));
console.log(arraysEquivalent(a, c));
console.log(arraysEquivalent(a, d));

// a and b are equiv
// a and c are not
// a and d are not
