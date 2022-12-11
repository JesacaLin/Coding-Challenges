//ALL CSX Callbacks & Higher-order Functions challenges will go here

LOOK; //Challenge: pluralize
/*Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array. */

//input: array strings
//output: array of strings with s after each element

//declare a function with parameter of array
function pluralize(arr) {
  //create a new array to store altered elements
  let newArr = [];
  //initialize a for loop, push changed elements to output loop.
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + "s");
  }
  return newArr;
}

// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

LOOK; //CHALLENGE: map
/*Create a function subtractTwo that accepts a number and returns that number minus 2.

Then create a function map that takes two inputs -

an array of numbers (a list of numbers)
a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.*/

//input: numbers
//output: new array

//declare a helper function subtractTwo with parameter of num.
//the function will take num and return the number - 2.
function subtractTwo(num) {
  return num - 2;
}

//declare a function call map with two parameters: array, callback function
//return new array
function map(array, callback) {
  //declare a new array to hold new variables
  const newArray = [];
  //Use a for loop to invoke the callback on each element.
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

LOOK; //CHALLENGE: forEach
/*Part 1
Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
Part 2
Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.*/

// input: array and callback
// output: new array

//declare function forEach with array and callback as parameters
const forEach = (array, callback) => {
  //utlize a loop to run the callback on each element of array.
  let i = 0;
  while (i < array.length) {
    callback(array[i]);
    i++;
  }
};

function map(array, callback) {
  //declare a new array to hold new variables
  const newArray = [];
  //Use forEach method to invoke the callback on each element.
  array.forEach((element) => {
    newArray.push(callback(element));
  });
  return newArray;
}

// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]

LOOK; //CHALLENGE: filterArray
// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  if (num % 2 === 0) {
    return num;
  }
}
function func2(num) {
  if (num % 2 !== 0) {
    return num;
  }
}

// Uncomment these to check your work!
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

LOOK; //CHALLENGE: filterArray

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:
