//LOOK--------------->Has Double Letter
// Write a function hasDoubleLetter(str) that accepts a string. The function should return a boolean indicating whether the string contains two of the same character consecutively. If the value passed into the function is not a string, return null.

//input: string;
//output: boolean

//if string contains consecutive new character, return true;
//loop through string
//set up counter for current value
//compare indexes, return boolean
//return null if str not a string

function hasDoubleLetter(str) {
  if (typeof str !== "string") return null;

  for (let i = 0; i < str.length; i++) {
    let currentVal = str[i];

    if (currentVal === str[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasDoubleLetter("deer")); // true
console.log(hasDoubleLetter("boot camp")); // true
console.log(hasDoubleLetter("toggle")); // true
console.log(hasDoubleLetter("taco")); // false
console.log(hasDoubleLetter("jumper")); // false
console.log(hasDoubleLetter(18)); // null
console.log(hasDoubleLetter(["array"])); // null

//LOOK--------------->First Vowel
// Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string. If the string does not contain a vowel, return null.

function firstVowel(str) {
  const vowels = "aeiou";
  let i = 0;
  while (i < str.length) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
    i++;
  }
  return null;
}

console.log(firstVowel("battery")); // 'a'
console.log(firstVowel("tunnel")); // 'u'
console.log(firstVowel("dog")); // 'o'
console.log(firstVowel("conventional")); // 'o'
console.log(firstVowel("rhythm")); // null

//LOOK--------------->Last Vowel
// Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. Note that the string may contain capitalization.

// Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful.

//should reverse the string and output the first vowel encountered.

function lastVowel(str) {
  const vowels = "aeiou";
  str = str.toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null

//LOOK--------------->Min Value
// Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.

//input: array
//output: smallest num in array
//if array is empty by checking the length, return null
//loop the array
//if min is smaller than the next index, replace currentval with min;
//return min

function minValue(nums) {
  if (nums.length === 0) return null;
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];
    if (currentVal < min) {
      min = currentVal;
    } else {
    }
  }
  return min;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3])); // -7
console.log(minValue([])); // null

//LOOK--------------->Avg Val
// Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null.

//input: arr
//output: num, average
function avgVal(arr) {
  if (arr.length === 0) return null;
  const answer = arr.reduce((acc, currentVal) => acc + currentVal, 0);

  return answer / arr.length;
}

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

//LOOK--------------->Max Value
// Write a function maxValue(nums) that takes in an array of numbers as an arg. The function should return the largest number of the array. If the array is empty, the function should return null.

const maxValue = (nums) => {
  if (nums.length === 0) return null;
  let counter = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (counter < nums[i]) {
      counter = nums[i];
    }
  }
  return counter;
};

console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
console.log(maxValue([-2, -3, -7, 3])); // 3
console.log(maxValue([])); // null

//LOOK--------------->Reverb
// Write a function reverb that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

let reverb = function (word) {
  if (typeof word !== "string") {
    return null;
  }
  let vowels = "aeiouAEIOU";
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }
  return word;
};

console.log(reverb("running")); // runninging
console.log(reverb("FAMILY")); // FAMILYILY
console.log(reverb("trash")); // trashash
console.log(reverb("DISH")); // DISHISH
console.log(reverb(197393)); // null
console.log(reverb("jfk")); //jfk

//LOOK--------------->Prev Prime
// Write a function prevPrime that accepts a number as an argument. The function should return the nearest prime number that is smaller than the given argument. Since 2 is the smallest prime number, return null if no number can be returned.

//input: num
//output: nearest prime that is smaller than num
//what is a prime? prime is a number that is not divisible by another number
//To determine if a number is prime, one common method is to check if it is
//divisible by any number other than 1 and itself.
//if smaller than 2, return null

//if it statisfys the condition, push the prime numbers to an arr?
//the closest prime to num is last index.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function prevPrime(num) {
  if (num < 2) return null;
  //reverse iterate
  for (let i = num - 1; i > 1; i--) {
    if (isPrime(i)) {
      return i;
    }
  }
  return null;
}

console.log(prevPrime(32)); // 31
console.log(prevPrime(33)); // 31
console.log(prevPrime(14)); // 13
console.log(prevPrime(7)); // 5
console.log(prevPrime(4)); // 3
console.log(prevPrime(2)); // null
console.log(prevPrime(1)); // null

//LOOK--------------->Addition Mutator
// Write a function additionMutator that accepts an array and a number as an arguments.
// The function should mutate the input array such that every element has the given number added to it.

//imput array, num
//output: mutated array

//iterate through the array
//add num to each el of the array
//return the mutated array
//can I use forEach?
function additionMutator(arr, num) {
  arr.forEach((x, i) => {
    arr[i] = x + num;
  });
}

let nums1 = [3, 7, 1, 2];
additionMutator(nums1, 4);
console.log(nums1); // [ 7, 11, 5, 6 ]

let nums2 = [11, 9, 4];
additionMutator(nums2, -1);
console.log(nums2); // [ 10, 8, 3 ]

//LOOK--------------->Alternating Words
// Write a function alternatingWords that accepts an array of words as an argument. The function should mutate the input array such that the words alternate between fully uppercase or lowercase. The first word should be uppercase.

//input: array
//output: mutated array with upper and lowercase words
//iterate through and on alternate indexes, make it uppercase

function alternatingWords(arr) {
  arr.forEach((x, i) => {
    arr[i] = i % 2 === 0 ? x.toUpperCase() : x.toLowerCase();
  });
}

let words1 = ["Belka", "STRELKA", "laika", "DEZIK", "Tsygan"];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ["Yellowstone", "Yosemite", "Zion", "Acadia"];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]

//LOOK--------------->Reverse String
// Write a function reverseString(str) that takes in a string. The function should return a new string where the order of the characters is reversed.

//input: string
//output: newString, order is reversed

function reverseString(str) {
  //   let reversed = str.split('').reverse().join('');
  //   return reversed

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let currentChar = str[i];
    reversed += currentChar;
  }
  return reversed;
}

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'

//LOOK--------------->Remove Last Vowel
// Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

//input: string
//output: string without last vowel
//reverse the string and remove the last vowel

//reverse iterate thorugh the string and find the first instance of the vowel
//return the rest of the els and remove the vowels
//reverse it back??

let removeLastVowel = function (word) {
  let vowels = "aeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return word;
};

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'

//LOOK--------------->Remove E Words
// Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them.

//input: string
//output: new string without "e"
//use helper func to loop through word to see if it includes e.
//return true or false;
//convert string to array
//if array contains helper func returns true
//split that index
function findE(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "e") {
      return true;
    }
  }
  return false;
}

//console.log(findE('the'))
//console.log(findE('everyone'))

function removeEWords(sentence) {
  const array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];
    if (findE(currentVal)) {
      array.splice(i, 1);
      i--;
    }
  }

  return array.join(" ");
}
console.log(removeEWords("What time is it everyone?")); // 'What is it'
console.log(removeEWords("Enter the building")); // 'building'
