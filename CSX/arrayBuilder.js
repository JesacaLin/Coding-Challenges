//Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

//input = obj
//output = array

//declare a function that accepts an obj as paramenter.
//return an array with the KEYS from the count obj. maybe push the keys to the array.
//repeat elements should be grouped
//so we can sort the elements, create a test to see if the one next to it is the same, if yes, push it to a new array???
//should these obj and arrays be outside of the function? maybe just the array since we are taking in a obj as a parameter? //Turns out it's best to keep the array inside the function rather than global!

//can we iterate through the object? Yes, turns out you can iterate through the object with the For...Of loop, it's made for objects!

// function arrayBuilder(obj) {
//   const array = [];
//   for (const [key, value] of Object.entries(obj)) {
//     if (value === 1) {
//       array.push(key);
//     } else if (value >= 2) {
//       array.push(key, key);
//     }
//     if (!key && !value) {
//       return array;
//     }
//   }

//   return array;
// }
// console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); // => []

//LOOK - CODESMITH'S SOLUTION

//input: obj
//output: array

//declare output array variable
//for...in loop to iterate through the properties inside of this object
//count variable to store how many times this property should appear in output array
//while loop to push the property into output array as long as count variable is greater than 0 and decrement count variable
//return output array

function arrayBuilder(obj) {
  const outputArray = [];
  for (let key in obj) {
    let repeatCount = obj[key];
    while (repeatCount > 0) {
      outputArray.push(key);
      repeatCount -= 1;
    }
  }
  return outputArray;
}

console.log(arrayBuilder({ cats: 2, dogs: 1 })); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
