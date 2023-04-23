// Count To Ten
// Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.

// NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely fail, so comment out your unnecessary console.logs when you want to see if you're passing the test!

// const countToTen = (num) =>{
//     //base case - num is 10
//     if (num === 10){
//         console.log(10);
//     } else{
//         //recursive case - easiest case to try first
//         console.log(num);
//         return countToTen(num + 1) //2
//     }
// };

// console.log(countToTen(1));

// Backward String
// Write a function, backwardString, that receives a string as an argument. It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.

// function backwardString(string) {
//   //base case? string.length is 1, console.log(last letter)
//   if (string.length === 1) {
//     console.log(string[0]);
//   } else {
//     //recursive case - log the current letter and call the function with the new string
//     const currentLetter = string[string.length - 1];
//     console.log(currentLetter);
//     const newString = string.substring(0, string.length - 1);
//     return backwardString(newString);
//   }
// }

// backwardString("happy");
// // y
// p
// p
// a
// h

// Sum Nums
// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num. You can assume that num will be greater than 1. Use recursion.

// function sumNums(num){
//     //base case
//     if(num === 1){
//         return 1;
//     };

//     let sum = num + sumNums(num - 1);
//     return sum;

// };

// console.log(sumNums(3)); // => 6 (3 + 2 + 1)

// Count Vowels
// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string. Use recursion.

// function countVowels(str) {
//   //base case - str.length is 0?
//   if (str.length === 0) {
//     return 0;
//   }

//   let counter = 0;

//   if (isVowel(str[0])) {
//     counter += 1;
//   }
//   //0
//   //1
//   //2

//   counter += countVowels(str.slice(1));
//   //0 = countVowels('our');
//   //1 = countVowels('ur');
//   //2 = countVowels('r');

//   return counter;
// }

// function isVowel(char) {
//   if ("aeiou".includes(char)) return true;
//   return false;
// }

// console.log(countVowels("Four")); // => 2
// console.log(countVowels("Four score")); // => 4
// console.log(countVowels("Four score and seven years")); // => 9

// Reverse Array
// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array. Use recursion.

// let arr = [1, 2, 3, 4];

// function reverseArray(arr) {
//   //base case:
//   if (arr.length === 0) {
//     return arr.slice();
//   }

//   let newArray = [];
//   //recursive case
//   //pop the element, push to newArray;
//   //calls the array again with the one less element that was popped!

//   const lastElement = arr.at(-1);
//   newArray.push(lastElement);

//   let reversedRemainingElements = reverseArray(arr.slice(0, -1));

//   newArray = newArray.concat(reversedRemainingElements);

//   return newArray;
// }

// let reversedArr = reverseArray(arr);

// console.log(reversedArr); // [4,3,2,1]
// console.log(arr); // [1,2,3,4]

// Sum Digits
// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument. You can assume that the argument will be a positive integer. Use recursion.

// function sumDigits(num) {
//   const numString = num.toString();
//   //base case
//   if (numString.length === 0) {
//     return 0;
//   };
//   //recursive case
//   const firstElement = +numString[0];
//   const remainingString = numString.slice(1);
//   return firstElement + sumDigits(remainingString);
// };

// console.log(sumDigits(1234)); // => 10

// Is Palindrome
// A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome. Return true if the string is a palindrome; otherwise, return false.

//base case? string length is 1 or less?? if length is 1, returns true.
//recursive case? comparing first and last letter on each recursive call. moving closer to base case.
//use shift and pop to remove the compared elements. Might not need this if I'm decreasing the index on each call instead.
//or slice b/c it doesn't mutate the array.

function isPalindrome(str) {
  str = str.toLowerCase();

  //base case
  if (str.length < 2) return true;
  else {
    //recursive case
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
  }
}

console.log(isPalindrome("Kayak")); // => true
console.log(isPalindrome("NEVERODDOREVEN")); // => true
console.log(isPalindrome("Tacocat")); // => true
console.log(isPalindrome("SELFLESS")); // => false
