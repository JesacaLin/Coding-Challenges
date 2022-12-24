//LOOK -- Vowel Counter
// Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.

// Vowels are the letters "a", "e", "i", "o", "u".

function countVowels(word) {
  //input: string
  //output: number of vowels
  //declare a variable and assign it a string of vowels.
  //set up a counter to keep track.
  //make it case insensitive
  //initialize a loop to compare the values.
  //return counter.
  word = word.toLowerCase();
  const vowels = "aeiou".toLowerCase();
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counter++;
    }
  }

  return counter;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

//LOOK --

//LOOK --

//LOOK --

//LOOK --
