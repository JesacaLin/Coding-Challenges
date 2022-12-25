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

//LOOK -- Abbreviate
// Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.

//input: string;
//output: new string;
//declare a vowels string;
//declare empty array;
//loop through word and if element is not included in vowels, push the word to new array.

const abbreviate = (word) => {
  let arr = [];
  const vowels = "aeiou".toLowerCase();
  word = word.toLowerCase();
  let i = 0;
  while (i < word.length) {
    if (!vowels.includes(word[i])) {
      arr.push(word[i]);
    }
    i++;
  }
  return arr.join("");
};

console.log(abbreviate("wonderful")); // 'wndrfl'
console.log(abbreviate("mystery")); // 'mystry'
console.log(abbreviate("Accordian"));

//LOOK --Uncompress
// Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return the uncompressed version of the string. See the examples.

// Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

// You may assume that the number of times will always be an integer between 0 and 9.

//input: conpressed string;
//output: uncompressed string;
//create an empty string to story changed string;
//create a loop to iterate through the string;
//create a variable to start the starting character on first iteration.
//create a variable to convert the 1st index into a number;
//return joined array;
const uncompress = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let num = Number(str[i + 1]);

    if (isNaN(num)) {
      //num is not a number, so skip this iteration;
      continue;
    }

    for (let j = 0; j < num; j++) {
      result += char;
    }
  }
  return result;
};

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'

//LOOK --Triplet True
// Write a function tripletTrue that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.
// input: string
// output: boolean
// iterate through the string
//compare if value at an index is the same as the other ones.
//return boolean.
const tripletTrue = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.length < 3) return false;

    if (str[i] == str[i + 1] && str[i + 1] == str[i + 2]) {
      return true;
    }
  }
  return false;
};

console.log(tripletTrue("caaabb")); // true
console.log(tripletTrue("terrrrrible")); // true
console.log(tripletTrue("runninggg")); // true
console.log(tripletTrue("bootcamp")); // false
console.log(tripletTrue("e")); // false

//LOOK --

//LOOK --

//LOOK --

//LOOK --