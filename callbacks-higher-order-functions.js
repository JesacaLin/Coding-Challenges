LOOK; //ALL CSX Callbacks & Higher-order Functions challenges will go here

//Challenge: pluralize
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

//CHALLENGE: Map

//CHALLENGE: Map #2

//CHALLENGE: forEach

//CHALLENGE: filterArray

//CHALLENGE:

//CHALLENGE:

//CHALLENGE:

//CHALLENGE:
