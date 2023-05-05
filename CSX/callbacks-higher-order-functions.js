//ALL CSX Callbacks & Higher-order Functions challenges will go here

LOOK; //Challenge: pluralize
/*Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array. */

//input: array strings
//output: array of strings with s after each element

//declare a function with parameter of array
// function pluralize(arr) {
//   //create a new array to store altered elements
//   let newArr = [];
//   //initialize a for loop, push changed elements to output loop.
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] + "s");
//   }
//   return newArr;
// }

// // Uncomment these to check your work!
// const animals = ["dog", "cat", "tree frog"];
// console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

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
// function subtractTwo(num) {
//   return num - 2;
// }

//declare a function call map with two parameters: array, callback function
//return new array
// function map(array, callback) {
//   //declare a new array to hold new variables
//   const newArray = [];
//   //Use a for loop to invoke the callback on each element.
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]

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
// const forEach = (array, callback) => {
//   //utlize a loop to run the callback on each element of array.
//   let i = 0;
//   while (i < array.length) {
//     callback(array[i]);
//     i++;
//   }
// };

// function map(array, callback) {
//   //declare a new array to hold new variables
//   const newArray = [];
//   //Use forEach method to invoke the callback on each element.
//   array.forEach((element) => {
//     newArray.push(callback(element));
//   });
//   return newArray;
// }

// // Uncomment these to check your work!
// console.log(typeof forEach); // should log: 'function'
// forEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof map); // should log: 'function'
// console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]

LOOK; //CHALLENGE: filterArray
// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const arrOfNums = [1, 2, 3, 4, 5];
// function func1(num) {
//   if (num % 2 === 0) {
//     return num;
//   }
// }
// function func2(num) {
//   if (num % 2 !== 0) {
//     return num;
//   }
// }

// // Uncomment these to check your work!
// console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

// LOOK; //CHALLENGE: eitherFilter
// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

// function eitherFilter(array, callback1, callback2) {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback2(array[i]) || callback1(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// Uncomment these to check your work!
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
// const over100 = (n) => n > 100;
// console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

LOOK; //CHALLENGE: eitherCallback
// Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. Notice that the lines of code testing your work are using functions and an array from previous challenges. The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

// function eitherCallback(callback1, callback2) {
//   //ADD CODE HERE
//   return (element) => {
//     return callback1(element) || callback2(element);
//   };
// }

// Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray;
// }
// const arrOfNums = [10, 35, 105, 9];
// const integerSquareRoot = (n) => Math.sqrt(n) % 1 === 0;
// const over100 = (n) => n > 100;
// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

//In this implementation, the eitherCallback() function takes two callback functions as arguments and returns a new callback function that combines the behavior of the two input functions. The new callback function returns a truthy value if either of the input callback functions returns a truthy value

LOOK; //CHALLENGE: reduce
//Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// ADD CODE HERE
// const reduce = (array, callback, initValue) => {
//   let accumulation = initValue;
//   for (let i = 0; i < array.length; i++) {
//     accumulation = callback(accumulation, array[i]);
//   }
//   return accumulation;
// };

// // Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0)); // should log 8

LOOK; //CHALLENGE: intersection

//Need to study this one
//input: array of arrays
//output: one array
// function intersection(arrays) {
//   //accumulator = starts as one of our arrays
//   let acc = arrays.pop();
//   //loop through array of arrays
//   while (arrays.length) {
//     const current = arrays.pop();
//     const newArr = [];

//     //compare current array with our accumulator
//     //for each element in current
//     //if that element exists in accumulator
//     //push that element into a new array
//     current.forEach((element) => {
//       if (acc.inclues(element)) newArr.push(element);
//     });
//     //accumlator reassigned to new array
//     acc = newArr;
//   }
//   // return our accumulator
//   return acc;
// }

// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// function intersection(arrays) {
//   return arrays.reduce((intersection, array) => {
//     return intersection.filter(element => array.includes(element));
//   });
// }

LOOK; //CHALLENGE: UNION
/*Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!*/

// function union(arr) {
//   //use reduce to iterate through the outter arrays.
//   //initialize an empty array to be our output.
//   const findUnique = arr.reduce((acc, curr) => {
//     //use forEach to compare ccurrent value with inner array.
//     curr.forEach((value) => {
//       //set conditional. If value is not present int he ouput array, add it.
//       if (!acc.includes(value)) {
//         acc.push(value);
//       }
//     });
//     //return output array
//     return acc;
//   }, []);
//   //return the result of calling reduce.
//   return findUnique;
// }

// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

LOOK; //CHALLENGE: Challenge: objOfMatches
/*Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.*/

//initialize a new obj
// use forEach to compare the two arrays?
//you have to do this based on index
//use bracket notation to add to new obj?
// function objOfMatches(arr1, arr2, callback) {
//   let object = {};
//   arr1.forEach(function (value, index) {
//     if (arr2[index] === callback(value)) {
//       object[value] = arr2[index];
//     }
//   });
//   return object;
// }

// Uncomment these to check your work!
// const arr1 = ["hi", "howdy", "bye", "later", "hello"];
// const arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
// function uppercaser(str) {
//   return str.toUpperCase();
// }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

LOOK; //CHALLENGE: arrToObj
// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

// function arrToObj(array, callback) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     obj[array[i]] = callback(array[i]);
//   }
//   return obj;
// }

// // Uncomment these to check your work!
// const arrOfStrings = ["beer", "glue"];
// const capitalize = (str) => str.toUpperCase();
// console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

// LOOK --> Challenge: multiMap
// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// function multiMap(arrOfValues, arrOfCallbacks) {
//   //initialize new obj
//   const obj = {};
//   //create a loop
//   for (let i = 0; i < arrOfValues.length; i++) {
//     //initialize new array to store callback values.
//     let callbackValues = [];
//     //create inner loop to transform each arrOfValues value with callbacks.
//     for (let j = 0; j < arrOfCallbacks.length; j++) {
//       //push results to new array
//       callbackValues.push(arrOfCallbacks[j](arrOfValues[i]));
//     }
//     //assign key value pairs
//     obj[arrOfValues[i]] = callbackValues;
//   }
//   //return obj
//   return obj;
// }

// // Uncomment these to check your work!
// function uppercaser(str) {
//   return str.toUpperCase();
// }
// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }
// function repeater(str) {
//   return str + str;
// }
// const items = ["catfood", "glue", "beer"];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// LOOK -->Challenge: majority

//input: array and callback
//output: boolean

//iterate with the callback and will need two counters
//maybe use for...of loop
//update counter if callback returns true
//if # true is = to # false, return false

// function majority(arr, callback) {
//   let callbackTrue = 0;
//   let callbackFalse = 0;
//   for (const num of arr) {
//     if (callback(num)) {
//       callbackTrue += 1;
//     } else {
//       callbackFalse += 1;
//     }
//   }
//   const result = callbackFalse >= callbackTrue ? false : true;
//   return result;
// }
// // Uncomment these to check your work!
// const isOdd = function (num) {
//   return num % 2 === 1;
// };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// LOOK -->Challenge: prioritize
//input: array, callback
//output: array of prioritized elements in the front, rest in the back.

//plan: iterate, pushed element that return true to first array, push false to 2nd array. concat the two arrays.

//initialize new arrays
//iterate through the array
//call callback with each element of array
//if callback is true, push element to first array
//else push to second array
//concat the two array
//return new array.

// function prioritize(arr, callback) {
//   const arrPriority = [];
//   const arrRest = [];
//   for (const element of arr) {
//     if (callback(element)) {
//       arrPriority.push(element);
//     } else {
//       arrRest.push(element);
//     }
//   }
//   return arrPriority.concat(arrRest);
// }

// // Uncomment these to check your work!
// function startsWithS(str) {
//   return str[0].toLowerCase() === "s";
// }
// const tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// LOOK -->countBy

//input: array, callback
//output: an object of occurances

//plan: iterate, keep track of how many times a certain value is returned inside an object's key value pairs.

//initialize an empty object
//iterate through the array
//store return value of callback on each element in a variable
//check to see if return value matches any of the keys
//if yes, update the key's value by one.
//return obj;

function countBy(arr, callback) {
  const obj = {};
  for (const element of arr) {
    let returnValue = callback(element);
    if (obj[returnValue] === undefined) {
      obj[returnValue] = 1;
    } else {
      obj[returnValue]++;
    }
  }
  return obj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return "even";
  else return "odd";
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

// LOOK -->
// LOOK -->
// LOOK -->
