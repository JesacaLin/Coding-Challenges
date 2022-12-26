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

//LOOK --Silly Strings
// Write a function sillyString that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

//input: string
//output: altered string
//create empty string to hold the altered string
//create a string of vowels
//iterate through the word
//if word includes a vowel, add letter b and the vowel
//return string

function sillyString(word) {
  let newString = "";
  let vowels = "aeiou";
  let i = 0;
  while (i < word.length) {
    if (vowels.includes(word[i])) {
      newString += `${word[i]}b${word[i]}`; // fix missing quotation mark
    } else {
      newString += `${word[i]}`; // update newString on each iteration
    }
    i++;
  }
  return newString;
}

console.log(sillyString("stop")); // stobop
console.log(sillyString("that")); // thabat
console.log(sillyString("can")); // caban
console.log(sillyString("cats")); // cabats
console.log(sillyString("italy")); // ibitabaly
console.log(sillyString("scooter")); // scobooboteber

//LOOK --More Dot Less Dash
// Write a function moreDotLessDash that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

//input: string
//output: boolean
//create counters for dot and dash variables
//loop through the elements and count each instance of dot or dash
//compare the two variables
//return result
function moreDotLessDash(str) {
  let dot = 0;
  let dash = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(".")) {
      dot++;
    }

    if (str[i].includes("-")) {
      dash++;
    }
  }
  return dot > dash;
}

console.log(moreDotLessDash("2-D arrays are fun. I think.")); // true
console.log(moreDotLessDash("Morse code is great.")); // true
console.log(moreDotLessDash(".... . -.--")); // true
console.log(moreDotLessDash(".--. .-. --- --. .-. .- -- -- . .-.")); // false
console.log(moreDotLessDash("high-flying acrobat.")); // false

//LOOK --Has Three Vowels
// Write a function hasThreeVowels that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.

// input: string
// output: boolean
//create a string of vowels
//make sure string is lowercase
//create new set to store unique values
//initalize a loop of the string.
//if vowels exist in the string, add to a new set.
//if set size is more than three, return true.
function hasThreeVowels(str) {
  str = str.toLowerCase();
  const vowels = "aeiou";
  let set1 = new Set();

  if (str.length < 3) return false;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      set1.add(str[i]);
    }
  }
  if (set1.size > 2) return true;
  return false;
}

//LOOK --Last Index
// Write a function lastIndex that takes in a string and a character. The function should return the last index where the character can be found in the string.

//input: str and character
// output: last index where the character can be found.
// loop thorugh each string and push the index to an array.
//return the last index of the array.
//or just loop backwards and grab the first instance of the char that way and return the index.
function lastIndex(str, char) {
  let indexArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(char)) {
      indexArr.push(i);
    }
  }
  return indexArr[indexArr.length - 1];
}

console.log(lastIndex("abca", "a")); // 3
console.log(lastIndex("mississipi", "i")); // 9
console.log(lastIndex("octagon", "o")); // 5
console.log(lastIndex("programming", "m")); // 7

//LOOK --Double Letter Count
//Write a function doubleLetterCount that takes in a string and returns the number of times that the same letter repeats twice in a row.

//input: string
//output: number
//set up counter
//loop through and compare characters at current index and the one next to it.
function doubleLetterCount(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    }
  }
  return counter;
}

console.log(doubleLetterCount("the jeep rolled down the hill")); // 3
console.log(doubleLetterCount("bootcamp")); // 1

//LOOK --Caesar Cipher
// Write a method caesarCipher that takes in a string and a number. The function should return a new string where every character of the original is shifted num characters in the alphabet.

// Feel free to use this variable:
//input string, num
//output: new string
//loop through string
//variable to hold new string
//variable to hold current char
//establish inner loop to compare elements
//when current char is found, increase the index by num.
//return the string
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function caesarCipher(string, num) {
  // Initialize an empty string to store the modified characters
  let newString = "";

  // Iterate over each character in the input string
  for (let i = 0; i < string.length; i++) {
    // Store the current character in a variable
    let currentChar = string[i];

    // Find the index of the current character in the alphabet string
    let charIndex = alphabet.indexOf(currentChar);

    // Calculate the index of the shifted character in the alphabet string
    let newIndex = (charIndex + num) % alphabet.length;

    // If the shift resulted in a negative index, add the length of the alphabet string to wrap around to the beginning
    if (newIndex < 0) newIndex += alphabet.length;

    // Get the character at the new index in the alphabet string
    let nextChar = alphabet[newIndex];

    // Add the shifted character to the new string
    newString += nextChar;
  }

  // Return the modified string
  return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"

//LOOK -- Vowel Cipher
// Write a function vowelCipher that takes in a string and returns a new string where every vowel becomes the next vowel in the alphabet.

//input: string;
//output: mutated string;

//iterate through string
//variable to store new string
//use includes method
//if matching vowels are encountered, replace with next indext in the vowels string.
//set up an index to hold vowel index, this is really just so you can have a
//condition to catch the edge case, what comes after u?
//if vowel is u, return an a
//if not, return the element
//if element is not a vowel, return it as is.
//return new string;
function vowelCipher(string) {
  const vowels = "aeiou";
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (vowels.includes(currentChar)) {
      let index = vowels.indexOf(currentChar);
      if (index === 4) {
        newString += "a";
      } else {
        newString += vowels[index + 1];
      }
    } else {
      newString += currentChar;
    }
  }
  return newString;
}

console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
