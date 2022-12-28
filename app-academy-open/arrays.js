//LOOK --> Array Index Of
// So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the Array.indexOf() method. The indexOf() method returns the first index that it finds for the element given, or -1 if the element is not found.

// Write a function named wordWithinArray(array,word) using Array.indexOf. The function takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not.

function wordWithinArray(array, word) {
  if (array.indexOf(word) === -1) return false;
  return true;
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false

//LOOK -->First and Last
// Write a function firstAndLast that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last elements of the array.

//input: array
//output: integer
//determine length
//if the length of array is even
//return sum first and last
//if length of array is odd
//return difference btw first and last
const firstAndLast = (arr) => {
  //const arrLength = arr.length;
  if (arr.length % 2 === 0) {
    return arr[0] + arr[arr.length - 1];
  } else {
    return arr[0] - arr[arr.length - 1];
  }
};

console.log(firstAndLast([1, 2, 3, 4])); // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5])); // 17
console.log(firstAndLast([12])); // 0
console.log(firstAndLast([7, 11, 3])); // 4

//LOOK -->Add Arrays
// Write a function combineArray(array1, array2) that takes in two arrays of numbers and returns the two arrays combined into a single array.

// Hint: Use the Array.concat method but be aware that calling this method won't permanently change, also known as mutate, either array.

function combineArray(array1, array2) {
  // return array1.concat(array2)
  const concat = [...array1, ...array2];
  return concat;
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7])); // => [17, 5, 6, 7]

//LOOK -->

//LOOK -->
