//Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the corresponding index in array2.

//write a function with two arrays as arguments
//will return a new array
//Need to set up a loop to evaluate if elements in array1 is divisible by 3 or 5.
//should I use  map instead of a for loop?
//elements in array1 will be replaced with the sum of itself added to the same index in array2.

function mergingTripletsAndQuints(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 3 == 0 || array1[i] % 5 === 0) {
      newArray.push(array1[i] + array2[i]);
    } else {
      newArray.push(array1[i]);
    }
  }
  return newArray;
}

console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]

//for the number 3, at index 2...it would be 3 + 6 = 9. array1, at index 2 is now 9.

console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6]));
