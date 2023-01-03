//TODO -------------->Add To Array Research
// Write a function that takes a location, either "FRONT" or "BACK" and adds an element to either the front or back of the given array. If location is anything besides "FRONT" or "BACK", print an error. Your function should not return anything and should mutate the original array. (Hint: Look up the JavaScript functions: push/pop/shift/unshift)

function addToArray(location, element, arr) {
  if (location === "FRONT") {
    testArray.unshift(element);
  } else if (location === "BACK") {
    testArray.push(element);
  } else {
    console.log("ERROR");
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]

//TODO -------------->Range
// Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive.

// Define this function using function expression syntax.

//input: two numbers
//output: array containing all numbers from min to max inclusive.
//delare an empty array
//iterate through nums between min and max
//push nums to the new array
//return new array;

const range = function (min, max) {
  let newArray = [];
  let i = min;
  while (i <= max) {
    newArray.push(i);
    i++;
  }

  return newArray;
};

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

//TODO -------------->Even Numbers
// Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

// Define this function using function expression syntax.

//input: number
//output: array of numbers that are positive, even, and less than giving number;

const evenNumbers = function (max) {
  let arr = [];
  if (max < 0) return false;
  let i = 2;
  while (i < max) {
    if (i % 2 === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};
console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

//TODO -------------->Log Between Stepper Recall
function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i = i + step) {
    console.log(i);
  }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
5;
6;
7;
8;
9;

logBetweenStepper(-10, 15, 5) - // prints out:
  10 -
  5;
0;
5;
10;
15;

//TODO -------------->Factors Of

//need new arr
//positive nums
//divisible by num

const factorsOf = function (num) {
  let arr = [];
  if (num < 0) return false;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(factorsOf(5)); // [ 1, 5 ]
console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
console.log(factorsOf(9)); // [ 1, 3, 9 ]
console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
console.log(factorsOf(2017)); // [ 1, 2017 ]

//TODO -------------->Fizz Buzz Array

//input: number;
//ouput: array with all pos nums less than max, divisible by 3 OR 5, not both;
//declare an empty array
//determine that num is positive
//iterate through the num
//determine if elements are divisible by 3 OR 5
//push to new array;
//return the array

const fizzBuzz = (max) => {
  let arr = [];
  if (max < 0) return false;
  for (let i = 1; i < max; i++) {
    if (i % 3 === 0) {
      arr.push(i);
    } else if (i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

//TODO -------------->Pit Pat

function pitPat(max) {
  let newArr = [];
  if (max < 0) return false;
  for (let i = 1; i <= max; i++) {
    if (i % 4 === 0) {
      newArr.push(i);
    } else if (i % 6 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

//TODO -------------->Pit Pat

let pitPat = function (max) {
  let nums = [];

  for (let i = 1; i <= max; i++) {
    if ((i % 4 === 0 || i % 6 === 0) && i % 12 !== 0) {
      nums.push(i);
    }
  }

  return nums;
};

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
//TODO -------------->
//TODO -------------->
//TODO -------------->
//TODO -------------->
//TODO -------------->
//TODO -------------->
//TODO -------------->
