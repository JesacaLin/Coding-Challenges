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

//LOOK --Pig Latin Slice Research
// Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

// Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String.slice() method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

// Hint: Remember the String.includes method!

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'
//input: string;
//output: new string;
//declare a string of vowels
//initialize a for loop to check elments in each word.
//declare variables to store mutated strings before putting it all together again.

function pigLatinWord(word) {
  word = word.toLowerCase();
  const vowels = "aeiou".toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[0])) {
      return `${word}yay`;
    } else if (vowels.includes(word[i])) {
      let beforeSplit = word.slice(0, i);
      let afterSplit = word.slice(i);
      return `${afterSplit}${beforeSplit}ay`;
    }
  }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"

//LOOK --

//LOOK --

//LOOK --
