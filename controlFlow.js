//Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.

function iLoveEvenNumbers(num) {
  return num % 2 === 0 ? "Oh Yeah Evens!" : "I am too normal for odd numbers";
}
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17));
