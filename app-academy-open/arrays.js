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

//LOOK -->Three Increasing
// Write a function threeIncreasing that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

//input: array
//output: boolean
//check if array contains three consecutive numbers
//cover edge case of lengths less than 3.
//initialize a loop
//create conditional to check if 2nd element is bigger than first element by 1.
//AND if 3rd element is bigger than second element by 2.
//return true or false

function threeIncreasing(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr.length < 3) return false;
    // let currentNum = arr[i]
    // console.log(`currentNum: ${currentNum}`)
    // let nextNum = arr[i+1]
    // console.log(`nextNum: ${nextNum}`)

    if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) {
      return true;
    }
  }
  //placed outside the for loop because it would allow the loop to continue checking the elements.
  //if placed inside for loop, it would stop the loop the first time it doesn't satisfy if.
  return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // true
console.log(threeIncreasing([2, 7, 8, 9])); // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8])); // false

//LOOK -->My Includes
// Write a function myIncludes(arr, target) that accepts an array and a target value as args. The function should return a boolean indicating whether the target is found in the array. Solve this without Array.includes or Array.indexOf.

//input: arr, num
//output: boolean

//check if arr has the num value
//return true/false

const myIncludes = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum === target) {
      return true;
    }
  }
  return false;
};

console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
console.log(myIncludes(["a", "b", "c", "e"], "a")); // true
console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

//LOOK -->My Index Of
// Write a function myIndexOf(arr, target) that takes in an array and target value as args. The function should return the first index where the target is found in the array. If the target is not found, it should return -1. Solve this without using Array.indexOf.

//input: arr, num
//ouput: index
//find first index when target is found
//iterate through arr
//if a match is found, return the index
//break out of the loop

function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    if (currentEl === target) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

//LOOK -->Sum Array
//Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

//input: array
//ouput: integer
//declare a variable to store the ongoing value;
//iterate through the array and add the values;
//return the sum

function sumArray(array) {
  // let totalSum = 0;
  // for (let i = 0; i < array.length; i++){
  //     totalSum += array[i]
  // }
  // return totalSum;

  return array.reduce(function (acc, currentIndex) {
    return acc + currentIndex;
  });
}

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

//LOOK -->Product Array
// Write a function productWithReduce(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array.

//input: nums
//output: number
//return product of all elements
//iterate through the array

function productWithReduce(nums) {
  return nums.reduce(function (acc, currentVal) {
    return (acc *= currentVal);
  });
}

console.log(productWithReduce([10, 3, 5, 2])); // 300
console.log(productWithReduce([4, 3])); // 12

//LOOK -->
