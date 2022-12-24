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

function aCounter(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    if (char === "a" || char === "A") count += 1;
  }
  return count;
}

console.log(aCounter("apple")); // => 1
console.log(aCounter("appleapple")); // => 2
console.log(aCounter("aAapple")); // => 3
