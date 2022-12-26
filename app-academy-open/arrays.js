//LOOK --> Array Index Of
// So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the Array.indexOf() method. The indexOf() method returns the first index that it finds for the element given, or -1 if the element is not found.

// Write a function named wordWithinArray(array,word) using Array.indexOf. The function takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not.

function wordWithinArray(array, word) {
  if (array.indexOf(word) === -1) return false;
  return true;
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false

//LOOK -->

//LOOK -->

//LOOK -->

//LOOK -->
