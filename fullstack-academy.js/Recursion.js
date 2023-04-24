// Count To Ten
// Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.

// NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely fail, so comment out your unnecessary console.logs when you want to see if you're passing the test!

// const countToTen = (num) =>{
//     //base case - num is 10
//     if (num === 10){
//         console.log(10);
//     } else{
//         //recursive case - easiest case to try first
//         console.log(num);
//         return countToTen(num + 1) //2
//     }
// };

// console.log(countToTen(1));

// Backward String
// Write a function, backwardString, that receives a string as an argument. It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.

// function backwardString(string) {
//   //base case? string.length is 1, console.log(last letter)
//   if (string.length === 1) {
//     console.log(string[0]);
//   } else {
//     //recursive case - log the current letter and call the function with the new string
//     const currentLetter = string[string.length - 1];
//     console.log(currentLetter);
//     const newString = string.substring(0, string.length - 1);
//     return backwardString(newString);
//   }
// }

// backwardString("happy");
// // y
// p
// p
// a
// h

// Sum Nums
// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num. You can assume that num will be greater than 1. Use recursion.

// function sumNums(num){
//     //base case
//     if(num === 1){
//         return 1;
//     };

//     let sum = num + sumNums(num - 1);
//     return sum;

// };

// console.log(sumNums(3)); // => 6 (3 + 2 + 1)

// Count Vowels
// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string. Use recursion.

// function countVowels(str) {
//   //base case - str.length is 0?
//   if (str.length === 0) {
//     return 0;
//   }

//   let counter = 0;

//   if (isVowel(str[0])) {
//     counter += 1;
//   }
//   //0
//   //1
//   //2

//   counter += countVowels(str.slice(1));
//   //0 = countVowels('our');
//   //1 = countVowels('ur');
//   //2 = countVowels('r');

//   return counter;
// }

// function isVowel(char) {
//   if ("aeiou".includes(char)) return true;
//   return false;
// }

// console.log(countVowels("Four")); // => 2
// console.log(countVowels("Four score")); // => 4
// console.log(countVowels("Four score and seven years")); // => 9

// Reverse Array
// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array. Use recursion.

// let arr = [1, 2, 3, 4];

// function reverseArray(arr) {
//   //base case:
//   if (arr.length === 0) {
//     return arr.slice();
//   }

//   let newArray = [];
//   //recursive case
//   //pop the element, push to newArray;
//   //calls the array again with the one less element that was popped!

//   const lastElement = arr.at(-1);
//   newArray.push(lastElement);

//   let reversedRemainingElements = reverseArray(arr.slice(0, -1));

//   newArray = newArray.concat(reversedRemainingElements);

//   return newArray;
// }

// let reversedArr = reverseArray(arr);

// console.log(reversedArr); // [4,3,2,1]
// console.log(arr); // [1,2,3,4]

// Sum Digits
// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument. You can assume that the argument will be a positive integer. Use recursion.

// function sumDigits(num) {
//   const numString = num.toString();
//   //base case
//   if (numString.length === 0) {
//     return 0;
//   };
//   //recursive case
//   const firstElement = +numString[0];
//   const remainingString = numString.slice(1);
//   return firstElement + sumDigits(remainingString);
// };

// console.log(sumDigits(1234)); // => 10

// Is Palindrome
// A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome. Return true if the string is a palindrome; otherwise, return false.

//base case? string length is 1 or less?? if length is 1, returns true.
//recursive case? comparing first and last letter on each recursive call. moving closer to base case.
//use shift and pop to remove the compared elements. Might not need this if I'm decreasing the index on each call instead.
//or slice b/c it doesn't mutate the array.

// function isPalindrome(str) {
//   str = str.toLowerCase();

//   //base case
//   if (str.length < 2) return true;
//   else {
//     //recursive case
//     if (str[0] !== str[str.length - 1]) return false;
//     return isPalindrome(str.slice(1, -1));
//   }
// }

// console.log(isPalindrome("Kayak")); // => true
// console.log(isPalindrome("NEVERODDOREVEN")); // => true
// console.log(isPalindrome("Tacocat")); // => true
// console.log(isPalindrome("SELFLESS")); // => false

// const arraySum =(arr) =>{
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         const element = arr[i]
//         if(Array.isArray(element)){
//             sum += arraySum(element);
//         } else {
//             sum += element;
//         }

//     }
//     return sum;
// }

// console.log(arraySum([1, [2, 3, [4]]])) // => 10
// console.log(arraySum([1, [2, 3]])) // => 10

// function concatEls(array){
//     let finalString = '';
//     for(let i = 0; i < array.length; i++){
//         let element = array[i];
//         if(Array.isArray(element)){
//             finalString += concatEls(element);
//         } else{
//             finalString += element;
//         };
//     };
//     return finalString;
// };

// let result = concatEls(['a', ['b', 'c', ['e']]]);
// console.log(result);

// function sumVals(obj){
//     let sum = 0;
//     for(let key in obj){
//         let value = obj[key];
//         if (typeof value === 'object'){
//             sum += sumVals (value);
//         } else{
//             sum += value;
//         }
//     }
//     return sum;
// }

// console.log(sumVals({a: 1, b: {c: {d: {e:2, f: 3}}}}));

// All Systems Go
// You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. The keys of the object represent the names of the systems on the spacecraft; the values are true if the system is "go" for launch and false otherwise. Your function should return true only if every system is "go" for launch!

// let systems = {
//   power: {
//     batteries: true,
//     solarCells: true,
//     generator: true,
//     fuelCells: true,
//   },
//   telecoms: {
//     antennas: {
//       highGain: true,
//       mediumGain: true,
//       lowGain: true,
//     },
//     transmitter: true,
//     receiver: true,
//   },
//   attitudeControl: {
//     stabilization: {
//       spin: true,
//       threeAxis: true,
//     },
//   },
//   propulsion: {
//     engines: {
//       engine1: true,
//       engine2: true,
//       engine3: false,
//     },
//     thrusters: true,
//     propellant: true,
//   },
//   environment: {
//     cooling: true,
//     heating: true,
//     lifeSupport: true,
//   },
// };

//iterate through the objects, if nested obj is encountered, it calls itself to interate within the nested obj.
//once false is encountered, it ends the loop.
//if the value of a key is 'true', keep going.

// function allSystemsGo(object) {
//   for (const value of Object.values(object)) {
//     if (typeof value === "object") {
//       if (!allSystemsGo(value)) {
//         return false;
//       }
//     } else if (value === false) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let [key, value] of Object.entries(object)){
//     for(let nestedValue in value){
//         let nestedInnerValue = value[nestedValue]
//         if (typeof (nestedInnerValue) === 'object'){
//             if (!allSystemsGo(nestedInnerValue)){
//                 return false;
//             }
//         };
//         if (nestedInnerValue === false){
//             return false;
//         }
//     }
// }
// return true;

// console.log(allSystemsGo(systems)); // => false

// The Truth Counts
// Write a function, theTruthCounts, that accepts a multi-dimensional array of values as argument. theTruthCounts should return the count of all truthy values inside the multidimensional array.

//set counter to count the occurances of truthy values
//iterate through the array;
//if array type is encountered
//recursively calls itself
//add to counter the result of the recursive call.
//else if element is not an array, evaluates the truthiness...
//if true, increment the counter
//return counter;

// function theTruthCounts(arr) {
//   let counter = 0;
//   for (const element of arr) {
//     if (Array.isArray(element)) {
//       if (theTruthCounts(element)) {
//         counter += theTruthCounts(element);
//       }
//     } else {
//       if (element) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// }
// console.log(theTruthCounts([0, [true, ["yes"]]])); // => 2

// Get Longest Name
// Write a function, getLongestName, that accepts an object as an argument. The object represents a family tree. Return the longest name in the family.

//each key is a name
//value is the object

//create counter to keep track of string length;
//create empty string variable
//iterate through each level of the obj, counting and updating the counter
//if the value is an obj
//recursively call the function
//comparing the current counter to the current nested key
//update counter and empty string if current nested key is longer
//if the value is NOT an obj
//compare current counter to current key
//update counter and empty string if current key is longer
//return the string variable;

// let family = {
//   "Beverly Marquez": {
//     "Nina Rhone": {
//       "William Rhodes": null,
//       "Paul Nell": null,
//       "Sir Paddington the Fourth, of the county Wilstonshire": null,
//     },
//   },
// };

// function getLongestName(obj) {
//   let counter = 0;
//   let longestName = "";
//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === "object" && value !== null) {
//       const nestedName = getLongestName(value);
//       if (nestedName.length > counter) {
//         counter = nestedName.length;
//         longestName = nestedName;
//       }
//     } else if (key.length > counter) {
//       counter = key.length;
//       longestName = key;
//     }
//   }
//   return longestName;
// }

// console.log(getLongestName(family)); // => 'Sir Paddington the Fourth, of the county Wilstonshire'

// Search Party
// Define a function, searchParty, that accepts 2 arguments:
// name (string)
// world (object)

// The keys in world represent a location. The values can be any combination of strings, arrays, or other objects.

// Search through world for name. If name exists in world, return an array with directions. Return null if you can't find name.

//input: name, string. obj
//name = the object's value
//output: array
//array of keys related to the name

//initialize empty array;
//iterate through the object, probably deconstructing the key and value pairs
//initialize a variable to store location one key
//condition check to see if the value is an obj
//if it is, store the recursive call to the function in a variable, location two.
//compare string paramater to the variable's value?
//if there is a match, push location one key and location two to array.
//else if compare location one's value to the string
//if match, push location one key to array
//else return null;
//return array of locations

let newYorkCity = {
  Manhattan: {
    Uptown: {
      "Washington Heights": "Daniel",
      UWS: "Cathy",
    },
    Midtown: {
      "Madison Square": "Susan",
      "Theater District": ["Robert", "Latisha"],
    },
    Downtown: {
      Tribeca: "Billy",
      "Financial District": {
        Fullstack: {
          "11th floor": ["David", "Nimit"],
          "25th floor": "Ashi",
        },
      },
    },
  },
  Brooklyn: {
    Bushwick: "Marilyn",
    "Bed-Stuy": ["Juan", "Denice"],
  },
  Queens: {
    Astoria: "Ella",
    Flushing: "Eric",
  },
  Bronx: {
    Fordham: "Aaron",
    Melrose: "Krysten",
  },
  "Staten Island": {
    Arlington: ["Nadine", "Mose"],
    "Elm Park": "Arthur",
  },
};

function searchParty(name, world) {
  // loop through the places in the world
  for (let place in world) {
    // if there's a person in this place...
    if (typeof world[place] === "string") {
      // ...see if it's the person we're looking for
      let person = world[place];

      // if we found them...
      if (person === name) {
        // return an array with the current place in it
        return [place];
      }
    }

    // else, if there's an array of people in this place...
    else if (Array.isArray(world[place])) {
      // ...see if the name we're looking for is in the array
      let people = world[place];

      // if the person we're looking for is in the array...
      if (people.includes(name)) {
        // ...return an array with the place in it
        return [place];
      }
    }

    // else, there must be another object in this place
    else {
      let nextObject = world[place];
      let resultFromNextObject = searchParty(name, nextObject);

      // if we found the person in the nextObject...
      if (resultFromNextObject) {
        // return a new array, with the current place concated in front of the resultFromNextObject
        return [place].concat(resultFromNextObject);
      }
    }
  }

  // if we looped through the world and never found the person, return null
  return null;
}

console.log(searchParty("Susan", newYorkCity));
console.log(searchParty("Nimit", newYorkCity));
console.log(searchParty("John", newYorkCity));

let world = {
  Fullstack: {
    "11th floor": "Marge",
    "25th floor": "Francis",
  },
  Subway: ["Jackie", "Grumio"],
};

// function searchParty (name, worldObject){
//     const directionsArray = [];

//     for (const [key, value] of Object.entries(worldObject)){
//         const locationOne = key;
//         if(typeof value === 'object' && value !== null){
//             let locationTwo = searchParty(name, value);

//             if(locationTwo !== null && locationTwo.indexOf(name) ){
//                 directionsArray.push(locationOne, locationTwo)
//             }
//         } else if (name === value){
//             directionsArray.push(locationOne);
//         }
//     };
//     return directionsArray.length ? directionsArray : null;
// };

console.log(searchParty("Francis", world)); // => ['Fullstack', '25th floor']
console.log(searchParty("Franco", world)); // => null
