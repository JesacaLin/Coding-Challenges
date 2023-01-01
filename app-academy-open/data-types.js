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
//LOOK--------------->
//LOOK--------------->
//LOOK--------------->
//LOOK--------------->
//LOOK--------------->
//LOOK--------------->
//LOOK--------------->
