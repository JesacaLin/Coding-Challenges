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
