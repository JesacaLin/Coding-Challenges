//Given a string, return string of each vowel in string, in order.

//initialize newString variable
//initialize string of vowels
//iterate through the string
//if vowel is encountered, concat to newString;
//return string;

// const vowelsOnly = (str) => {
//   let newString = "";
//   const vowels = "aeiou";
//   for (const letter of str) {
//     if (vowels.includes(letter.toLowerCase())) {
//       newString += letter;
//     }
//   }
//   return newString;
// };

// console.log(vowelsOnly("porcupine")); // "ouie"
// console.log(vowelsOnly("moop")); // "oo"

// Challenge: Is Palindrome?
// Return true/false if a string is a palindrome (a string that’s the same forwards and backwards, like “noon”)

//edge cases:
//if string is only one letter;
//turn everything lowercase;
//for sentences, remove white space and punctuation.

//iterate through the word.
//set pointers, pointing to the front of the word and back.
//use fail first principle by letting the loop iterate through until it's false, if no false, return true.

// const isPalindrome = (str) => {
//   str = str
//     .toLowerCase()
//     .replace(/[^\w\s]/gi, "")
//     .replace(/\s+/g, "");

//   if (str.length < 2) {
//     return false;
//   }

//   for (let i = 0; i < str.length; i++) {
//     let front = str[i];
//     let back = str.at(str.length - (i + 1));
//     if (front !== back) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("Jesaca"));
// console.log(isPalindrome("A man, a plan, a canal, Panama!"));

// Challenge: Find Largest Number
// Write a function that finds the biggest number in an array.
// ◦ array contains numbers and strings-of-numbers
// ◦ array can contain strings that cannot be converted
// ◦ print a warning about those and then skip them

//set counter to hold current highest number;
//iterate through the array
//convert each element to number, if isNaN, skip with continue keyword.
//compare current number to the counter
//return largest num;

// const largestNum = function(arr){
//   let largestNum = 0;
//   let secondLargest = 0;

//   for (let i = 0; i < arr.length; i++){
//     arr[i] = Number(arr[i]);
//     if (isNaN(arr[i])){
//       console.log('Warning: Skipping string')
//       continue;
//     };
//     if (arr[i] > largestNum){
//       largestNum = arr[i];
//     };
//     if (arr[i] === largestNum) {
//       arr.splice(i, 1);
//       i--;
//     };
//     if (arr[i] > secondLargest){
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// };

// console.log(largestNum([2, 6, 10]));
// console.log(largestNum([55, 'string', 100]));
// console.log(largestNum([4, '7', 15, '20', '1000']));

// const largestNum = function (arr) {
//   let largest = -Infinity;
//   for (let num of arr) {
//     num = Number(num);
//     if (!isNaN(num)) {
//       if (num > largest) {
//         largest = num;
//       }
//     }
//   }
//   return largest;
// };

// const secondLargest = function (arr, callback) {
//   const largest = callback(arr);
//   let second = -Infinity;
//   for (let num of arr) {
//     num = Number(num);
//     if (!isNaN(num) && num !== largest) {
//       if (num > second) {
//         second = num;
//       }
//     }
//   }
//   return second;
// };

// console.log(secondLargest([2, 6, 10], largestNum));
// console.log(secondLargest([55, "string", 100], largestNum));
// console.log(secondLargest([4, "7", 15, "20", "1000"], largestNum));

// Challenge: Letter Counts
// For a word, return an object of the counts of letters

//we need to create an object that will have the letters as the keys and values as the number of occurances of the letter.

//edge cases: make letters lowercase

//initialize a new obj;
//iterate through the string;
//check if letter exists as a key in the obj, if yes, ++;
//if not, create it as a key/value pair and assign it a starting value of one;
//return obj;

// const letterCount = (str) => {
//   const obj = {};
//   str = str.toLowerCase();
//   for (const letter of str) {
//     if (letter in obj) obj[letter]++;
//     else obj[letter] = 1;
//   }
//   return obj;
// };

// letterCount("hello"); // { h: 1, e: 1, l: 2, o: 1 }

// Challenge: Invert Object
// Given an object like this. return an object the swaps the keys and values

//take the key/value pairs within an obj and switch it.

//create variables to hold the keys and values;
//reassign them

capitalsToStates = {
  Annapolis: "MD",
  Sacramento: "CA",
  Trenton: "NJ",
};

// statesToCapitals = {
//   "MD": "Annapolis",
//   "CA": "Sacramento",
//   "NJ": "Trenton",
// }
