//Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

//The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

//input: array
//output: new array with s added to the end of each string

function pluralize(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + "s");
  }
  return newArray;
}

const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
