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

LOOK; //CHALLENGE: Map #2

LOOK; //CHALLENGE: forEach

LOOK; //CHALLENGE: filterArray

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:

LOOK; //CHALLENGE:
