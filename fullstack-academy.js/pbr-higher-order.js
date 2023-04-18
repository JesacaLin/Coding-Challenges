// Very Odd
// Write a function, veryOdd, that accepts an array of numbers as an argument. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// function veryOdd (arr){
//     return arr.filter((num) => num % 2 !== 0);
//    }

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

// YOUR CODE BELOW
//input: array of nums
//output: a count of the number of even numbers it replaced

//check the array for even nums, replace with 'normie', count the occurance

//set up counter variable
//iterate through the array
//check for even number
//if even, replace with bracket notation
//incredment counter
//return counter

// function veryOddMutant (arr){
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 === 0){
//         arr[i] = 'normie';
//         counter++
//       };
//     };
//     return counter;
//   };

// Clone Machine
// Write a function cloneMachine, that, given an argument animal (represented as an object), returns a clone of animal.

// The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

// cloneMachine should also push the name of the clone to the parent's offspring array.

// let dolly = {
//   name: "Dolly",
//   species: "sheep",
//   offspring: [],
// };

// function cloneMachine(animalObj) {
//   const clone = {
//     name: `${animalObj.name}Clone`,
//     species: animalObj.species,
//     offspring: [],
//   };

//   animalObj.offspring.push(clone.name);

//   return clone;
// }

// let dollyClone = cloneMachine(dolly);

// console.log(dollyClone);
// // {name: 'DollyClone', species: 'sheep', offspring: []}
// console.log(dolly);
// // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}

// My Splice
// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

// Do not use .splice in your function.

//iterate through the array
//at the index given, replace with the value.
//add remaining value

// let myArray = [1, 2, 3];
// let funNums = [10, 20, 30, 40, 50, 60];

// function mySplice(array, startIndex, deleteCount, newValue) {
//   const removedElements = array.slice(startIndex, startIndex + deleteCount);
//   const keptElements = array
//     .slice(0, startIndex)
//     .concat(
//       newValue !== undefined ? [newValue] : [],
//       array.slice(startIndex + deleteCount)
//     );

//   array.length = 0;
//   array.push(...keptElements);

//   return removedElements;
// }

// console.log(mySplice(myArray, 1, 1, "apples")); // => [2]
// console.log(myArray);

// console.log(mySplice(funNums, 2, 3));
// console.log(funNums);
//[10, 20, 60]

// Reverse Array
// Write a function, reverse, that accepts an array as an argument, and reverses the array.

// The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

//loop the array
//take current element
//shift off the array, push to back

//reverse loop through the array
//take last element, place in front, remove from array
//take next last element, add to index 1 (++)

//create holder array
//reverse iterate through the original array and push to new array.
//clear original array contents
//push sorted array values to original array with spread operator.

// let myArray = [1, 2, 3, 4];

// function reverseArray(array) {
//   const helperArray = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     helperArray.push(array[i]);
//   }
//   array.length = 0;
//   array.push(...helperArray);
//   return array;
// }

// console.log(reverseArray(myArray));
// console.log(myArray); // [4, 3, 2, 1]

// Deeper Copy
// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two-dimensional array.

// let myArray = [1, [2, 3]];

// function deeperCopy (arr){
//     const clone = [];
//     for (let i = 0; i < arr.length; i++){
//         let currentElement = arr[i];
//         if (Array.isArray(currentElement)){
//             let nestedArray = [];
//             for (let j = 0; j < currentElement.length; j++){
//                 nestedArray.push(currentElement[j]);
//             };
//             clone.push(nestedArray);
//         };
//         clone.push(currentElement)
//     };
//     return clone
// }

// let copy = deeperCopy(myArray);
// copy[1].push(4);
// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]

// Function Logger
// Define a function functionLogger that accepts 2 arguments:

// 1) func (function) - a function to run

// 2) arg (any type) - a value to pass into func as an argument

// functionLogger should complete the following steps:

// 1) log the message "Function starting"

// 2) invoke the provided function

// 3) log "Function complete"

// 4) return the result of the function call

// Note that the unit tests will check that the correct value is returned; they do not check if you console logged the right values at the right time.

// const functionLogger = function(func, arg){
//     console.log('Function starting');
//     const invoked = func(arg);
//     console.log('Function complete');
//     return invoked;
// };

// function squareNum(x) {
//   return x * x;
// }

// let squareOfFour = functionLogger(squareNum, 4);
// // Function starting
// // Function complete

// console.log(squareOfFour) // 16

// Finder Function
// Define a function finderFunction that accepts an array and a callback function as arguments. finderFunction should pass each element from the array into the callback function.

// If the callback returns true for any of the elements in the array, return the index of the current element. If the callback never returns true, return -1;

// let numbers = [1, 3, 5, 64, 7, 12];
// let odds = [9, 13, 15, 17];

// const finderFunction = function (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     let result = callback(arr[i]);
//     if (result === true) return i;
//   }
//   return -1;
// };

// function isEven(num) {
//   return !(num % 2);
// }

// console.log(finderFunction(numbers, isEven)); // 3
// console.log(finderFunction(odds, isEven)); // -1

// My ForEach
// Write a function myForEach that accepts an array and a callback function as arguments. The behavior of myForEach should mirror the functionality of the native .forEach() array method as closely as possible.

// let sum = 0;

// function addToSum(num) {
//   sum += num;
// }

// let nums = [1, 2, 3];

// function myForEach(arr, callback) {
//   for (let [index, value] of arr.entries()) {
//     callback(value, index);
//   }
// }

// myForEach(nums, addToSum);

// console.log(sum); // 6

// Chain Reaction
// Define a function, chainReaction, that accepts 2 arguments:

// 1) a starting value

// 2) an array of functions

// chainReaction should pass the starting value into the first function in the array. It should pass the value returned by the first function as an argument into the second function, and so on until every function in the array is called.

// chainReaction should return the final value returned by the final function in the array.

//iterate through the array of funcs
//1st iteration: pass starting value to funct at index 0;
//update the starting value;
//2nd iteration: pass new starting value into 2nd func
//update the starting value;
//3rd iteration: pass the starting value into 3rd func
//update the starting value;
//return starting value;

function chainReaction(startingValue, arrOfFunctions) {
  for (let i = 0; i < arrOfFunctions.length; i++) {
    let currentFunction = arrOfFunctions[i];
    startingValue = currentFunction(startingValue);
  }
  return startingValue;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); // => 25
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); // => -15
