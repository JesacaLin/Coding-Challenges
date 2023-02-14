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

//TODO --> Fibonacci Sequence and Big O notation
//problem: given a number 'n', find the first 'n' elemtns of the Fibonacci dequence

//initialize new empty array with given numbers added already
//initialize a loop n times to add first two values together.
//create variables to store last, second to last values
//push to array
//return array

function findFibo(n) {
  const array = [0, 1]; //O(1) constant time
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2]; //O(n) Linear
  }
  return array; //0(1) constant time
}

//Big-O = O(n): Linear

// console.log(findFibo(2));
// console.log(findFibo(7));

//TODO-->Factorial

//given an integer 'n', find the factorial of that integer

//what is a factorial? - a non-negative integer is the product of all positivie integers less than or equal to "n"

//have a counter variable to store changing values
//initialize a reverse loop multiple n times
//retrn the counter variable

function factorials(n) {
  let counter = n;
  for (let i = n; i > 1; i--) {
    counter *= i - 1;
  }
  return counter;
}
//Big O = O(n)
// console.log(factorials(5))

//TODO --> Give a natural number 'n', determine if the number is prime or not

//set condition if it's divisible by 2?
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(15));

//TODO --> Give a positive ineger 'n', determine if the number is a power of 2 or not.

//what is a power of 2?
//an integer is a power of two if there exists an integer 'x' such that 'n' === 2 to power of x.
//test that integer is positive
//initial a while loop?
//use if statement to test if number is power of two

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  for (let i = 0; i < num; i++) {
    if (num === 2 ** i) {
      return true;
    }
  }
  return false;
}

//Big O = O(log n)

console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(1));
