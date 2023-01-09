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

//TODO -------------->Double Sequence

//input: base num
//output: array of nums based on the length argument
//variable to hold new array
//iterate
//first element is base
//total length is 2nd argument
//doubling previous ele
//push the element to array
//return array
function doubleSequence(base, length) {
  let newArr = [base];

  if (length <= 0) return [];

  for (let i = 1; i < length; i++) {
    // Specifically, the value of next is calculated as last * 2, so last
    // must be the last element that was added to the seq array.
    let last = newArr[newArr.length - 1];
    let next = last * 2;
    newArr.push(next);
  }
  return newArr;
}

console.log(doubleSequence(7, 3)); // [7, 14, 28]

// Here is an example of how the newArr array is constructed in the
// first few iterations of the loop:

// Iteration 1: base = 7, seq = [7]
// Iteration 2: last = 7, next = 14, seq = [7, 14]
// Iteration 3: last = 14, next = 28, seq = [7, 14, 28]
// As you can see, the value of next in each iteration is calculated
// as the double of the value of last in the previous iteration. This is why last must be the last element of the seq array, rather than the first or current element.

console.log(doubleSequence(3, 5)); // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3)); // [5, 10, 20]
console.log(doubleSequence(5, 4)); // [5, 10, 20, 40]
console.log(doubleSequence(5, 0)); // [ ]

//TODO -------------->Triple Sequence

function tripleSequence(start, length) {
  let arr = [start];

  let i = 1;

  while (arr.length < length) {
    let last = arr[arr.length - 1];
    let next = last * 3;
    arr.push(next);
    i++;
  }
  return arr;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]

//TODO -------------->Unique

//input: array
//output: array of unique elements
//initialize new array
//iterate through the elements
//compare current element to elements in the new array
//push to array if element is not in the new array already
//return new array

function unique(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentVal = arr[i];
    if (!newArr.includes(currentVal)) {
      newArr.push(currentVal);
    }
  }
  return newArr;
}

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(["a", "b", "c", "b"])); // ['a', 'b', 'c']

//TODO -------------->Yeller

function yeller(words) {
  //let newArr = [];
  return words.map(function (currentVal) {
    return currentVal.toUpperCase();
  });
}

console.log(yeller(["hello", "world"])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(["kiwi", "orange", "mango"])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

//TODO -------------->Tripler

const tripler = (nums) => {
  return nums.map(function (currentVal) {
    return currentVal * 3;
  });
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

//TODO -------------->Long Words

function longWords(words) {
  return words.filter(function (currentVal) {
    return currentVal.length > 5;
  });
}

console.log(longWords(["bike", "skateboard", "scooter", "moped"]));
// [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"]));
// [ 'couscous', 'ceviche', 'solyanka' ]

//TODO -------------->Choosey Endings

function chooseyEndings(word, suffix) {
  if (!Array.isArray(word)) return [];

  let newArr = [];
  for (let i = 0; i < word.length; i++) {
    let currentVal = word[i];
    if (currentVal.endsWith(suffix)) {
      newArr.push(currentVal);
    }
  }
  return newArr;
}

console.log(chooseyEndings(17, "ily"));
// [ ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "ly"
  )
);
// [ 'family', 'fly', 'timidly' ]

console.log(
  chooseyEndings(
    ["family", "hound", "catalyst", "fly", "timidly", "bond"],
    "nd"
  )
);
// [ 'hound', 'bond' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "icity"));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(["simplicity", "computer", "felicity"], "ily"));
// [ ]

//TODO -------------->Common Factors
function commonFactors(num1, num2) {
  let arr = [];
  let i = 1;
  while (i <= num1) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

console.log(commonFactors(50, 30)); // [1, 2, 5, 10]
console.log(commonFactors(8, 4)); // [1, 2, 4]
console.log(commonFactors(4, 8)); // [1, 2, 4]
console.log(commonFactors(12, 24)); // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44)); // [1, 2, 11, 22]
console.log(commonFactors(7, 9)); // [1]

//TODO -------------->Adjacent Sums
//create new array
//iterate through array
//sum elements next to each other
//push sum to new array
//return array
function adjacentSums(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];
    newArr.push(sum);
  }
  return newArr;
}

console.log(adjacentSums([3, 8, 7, 1]));
// [ 11, 15, 8 ]
console.log(adjacentSums([10, 5, 4, 3, 9]));
// [ 15, 9, 7, 12 ]
console.log(adjacentSums([2, -3, 3]));
// [-1, 0]

//TODO -------------->Fibonacci Sequence

//delare first, second variable and set to 1;
//declare new array, add first and second variable;
//iterate through
//create last store the most recent value in newArray;
//create next will store next to last value;
//add last and next together
//push the number to new array;
//return array
function fibonacciSequence(num) {
  const first = 1;
  const second = 1;
  let newArray = [first, second];
  for (let i = 2; i < num; i++) {
    let last = newArray[newArray.length - 1];
    //console.log(`last is ${last}`)
    let nextLast = newArray[newArray.length - 2];
    //console.log(`last is ${nextLast}`)
    let sum = nextLast + last;
    newArray.push(sum);
  }
  return newArray;
}

console.log(fibonacciSequence(4));
// [ 1, 1, 2, 3 ]
console.log(fibonacciSequence(5));
// [ 1, 1, 2, 3, 5 ]
console.log(fibonacciSequence(8));
// [ 1, 1, 2, 3, 5, 8, 13, 21 ]
console.log(fibonacciSequence(0));
// [ ]
console.log(fibonacciSequence(1));
// [ 1 ]
console.log(fibonacciSequence(2));
// [ 1, 1 ]

//TODO -------------->Pick Primes

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(3));
console.log(isPrime(10));

function pickPrimes(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));
// [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));
// [101, 103, 2017]

//TODO -------------->Greatest Factor Array

//helper function to find greatestFactor
//interate in reverse to find first factor
//which will be the biggest
function greatestFactor(num) {
  let gFactor = 0;
  for (let i = num - 1; i >= 0; i--) {
    if (num % i === 0) {
      gFactor = i;
      break;
    }
  }
  return gFactor;
}
//console.log(greatestFactor(14)) //7

//iterate through array
//if element is even
//call helper and replace element
//return new array
function greatestFactorArray(array) {
  return array.map(function (currentVal) {
    if (currentVal % 2 === 0) {
      return greatestFactor(currentVal);
    }
    return currentVal;
  });
}

console.log(greatestFactorArray([16, 7, 9, 14]));
// [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10]));
// [15, 3, 12, 21, 5]

//TODO -------------->Summation Sequence

//create helper function
//iterate and add each element in the num, return number
function summation(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}
//console.log(summation(3)) //6
//console.log(summation(6)) //21
//input: start num, length = num of elements;
//output: new array
//create new array with start as first element;
//iterate using length value;
//push values based on the newArray's index
function summationSequence(start, length) {
  let newArray = [start];
  for (let i = 0; i < length - 1; i++) {
    let next = summation(newArray[newArray.length - 1]);
    newArray.push(next);
  }
  return newArray;
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]

//TODO -------------->Remove From Array Research
//input: string, array
//output: mutated array

function removeFromArray(location, arr) {
  if (location === "FRONT") {
    arr.shift();
  } else if (location === "BACK") {
    arr.pop();
  } else {
    console.log("ERROR");
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]

//TODO -------------->Popper

//input: array, num
//output: new array with removed elements
//declare a variable to return
//remove the num elements from the end of the array;
//return array
const popper = function (array, num) {
  const removeElements = array.splice(-num);
  return removeElements;
};

let arr1 = ["a", "b", "c", "d", "e"];
console.log(popper(arr1, 2)); // [ 'e', 'd' ]
console.log(arr1); // [ 'a', 'b', 'c' ]

let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
console.log(popper(arr2, 1)); // [ 'cabbage' ]
console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

//TODO -------------->

//TODO -------------->

//TODO -------------->

//TODO -------------->

//TODO -------------->

//TODO -------------->
