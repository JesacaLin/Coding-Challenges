/*Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. The value returned should be an array with the low, high, and range.*/

//declare a function with the name getTheRange with a parameter arr;
//using min/max to find the range of an array.
//return new array with low, high, then range value.

//OR sort the array then push the first index, last index, the the difference to the new array

let newArr = [];
function getTheRange(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[0]);
    newArr.push(arr.at(-1));
    newArr.push(arr.at(-1) - arr[0]);
  }
  return newArr.slice(0, 3);
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); //
