//LOOK -------------->520. Detect Capital
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Input: word = "USA"
// Output: true

// Input: word = "FlaG"
// Output: false

// Constraints:
// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.
// Accepted
// 296.3K
// Submissions
// 530.1K
// Acceptance Rate
// 55.9%

// var detectCapitalUse = function (word) {
//   if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
//   for (let i = 1; i < word.length; i++) {
//     let firstChar = word[0];
//     if (word[i] !== word[i].toLowerCase()) {
//       return false;
//     } else if (
//       firstChar === firstChar.toUpperCase() &&
//       word[i] !== word[i].toLowerCase()
//     ) {
//       return false;
//     }
//   }
//   return true;
// };

//LOOK -------------->Two Sum
// Easy
// 41.7K
// 1.4K
// Companies
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

//input: array and target num
//output: array, two indices

//establish empty array
//iterate through the values
//establish current value
//establish inner loop
//add inner loop val to current value
//if adds up to target, push to new array

// var twoSum = function (nums, target) {
//   let newArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     let currentVal = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (currentVal + nums[j] === target) {
//         newArray.push(i, j);
//       }
//     }
//   }

//   return newArray;
// };
// console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
// console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
// console.log(twoSum([3, 2, 4], 6)); //[1, 2]
// console.log(twoSum([3, 3], 6)); //[0, 1]

//LOOK -------------->Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  //find lowest number in the array as the buy date
  //highest as the sell date
  //however, index of buying has to be lower than index of selling

  //initialize variables for min (first value in array) and maxProfits
  //iterate through the array and evaluate if value is less than the current min
  //if yes, replace min with current value
  //else, calculate the profit and compare it to the current maxProfit
  //if higher, replace current maxProfit
  //returns the maxProfit
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      let currentMaxProfit = prices[i] - min;
      if (currentMaxProfit > maxProfit) {
        maxProfit = currentMaxProfit;
      }
    }
  }
  return maxProfit;
};

// console.log(maxProfit([2, 4, 1]));
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

//LOOK -------------->Majority Element

//big-O is quadratic
// var majorityElement = function(nums) {
//   //set condition to compare next to each other
//    //use counter to keep track
//   //initialize an outer loop with current value variable
//       //innerCounter
//       //initialize inner loop and compare values to current variable in outter loop
//           //if matches, ++ innerCounter
//       //upon each inner loops's
//       let counter = 0; //1
//       let winningNum = 0; //3

//       for(let i = 0; i < nums.length; i++){

//           for (let j = i + 1; j < nums.length; j++){
//               let innerCounter = 0; //1
//               if(nums[i] === nums[j]){
//               innerCounter ++
//                }

//               if (innerCounter > counter){
//               counter = innerCounter;
//               winningNum = nums[i]
//           }
//       }
//   }
//   return winningNum;
// };

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function (nums) {
  //use an empty object to keep track of occurances
  //initialize a for loop to check if object contains the key
  //if yes, ++
  //if no, set value of key to 1;
  //use a for in loop to iterate through the object keys and see which value returns true on the condition. nums.length/2
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      count[nums[i]]++;
    } else {
      count[nums[i]] = 1;
    }
  }
  for (const num in count) {
    if (count[num] > nums.length / 2) {
      return num;
    }
  }
};
// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//Big O - O(n) - Linear

//LOOK -------------->Contains Deuplicate
//have to make comparison, use an empty object.. but if you don't need to indicate which is the highest duplicated value, then using a set or loop would do.
//input: array of nums
//output: boolean
//condition: >= 2 times
//  var containsDuplicate = function(nums) {
//   //initialize an empty obj to store the array values as key/value pairs
//   //use for loop to iterate thorugh the array
//       //increment values that appear more than once
//       //add key to obj if it doesn't exist, set value to 1
//   //use for/in loop to loop through obj
//       //establish conditional to evaluate if conditions are met
//       //return true
//   //after all loops have run, return false

//   let obj = {};
//   for(let i = 0; i < nums.length; i++){
//       if(obj[nums[i]]){
//           obj[nums[i]]++;
//       } else{
//           obj[nums[i]] = 1;
//       }
//   }
//   for(const value in obj){
//       if(obj[value] > 1){
//           return true;
//       }
//   }
//   return false;

// };

//would be easier to use a Set. Set allows you to optionally add in an array.
//input: array
//output: boolean
//method: use set
const containsDuplicate = (nums) => {
  //creates a set to store unique values from nums array
  const newSet = new Set(nums);
  //compare lengths of set vs array
  return newSet.size !== nums.length;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));

//LOOK -------------->VALID PALINDROME

//inputer: string
//output: boolean
//need to remove all non-alphanumeric characters and spaces.
//also need to convert all letters to lowercase
//empty strings automatically return true

//method:
//validate input type, use replace(/[^0-9a-z]/gi, '') and toLowerCase method
//turn into array, reverse it
//compare to original

var isPalindrome = function (s) {
  const newString = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const reverseString = newString.split("").reverse().join("");
  return newString === reverseString;
};

//LOOK -------------->Valid Anagram

//input: two strings
//output: boolean
//method:
//turn both strings into arrays and sort them.
//compare
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sArray = s.split("").sort().join("");
  const tArray = t.split("").sort().join("");
  return sArray === tArray;
};

//IDEAL IMPLEMENTATION
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let letterS = {};
//   let letterT = {};

//   s.split("").forEach((item) => {
//     if (!letterS[item]) {
//       letterS[item] = 1;
//     } else {
//       letterS[item]++;
//     }
//   });

//   t.split("").forEach((item) => {
//     if (!letterT[item]) {
//       letterT[item] = 1;
//     } else {
//       letterT[item]++;
//     }
//   });

//   for (let key in letterS) {
//     if (letterS[key] !== letterT[key]) return false;
//   }

//   return true;
// };

//LOOK -------------->LONGEST PALINDROME

//method: use frequency table. Will treat upper and lower case characters as distinct values.
//if values are even numbers, can keep one key that has value of one.
//longest length is all the even values added + 1

//declare new empty obj, variable to hold length, boolean flag for whether length is odd or not.
//initialize a loop and add occurances to object.
//using for in loop, count occurances of even values and add 1.

var longestPalindrome = function (s) {
  let obj = {};
  let length = 0;
  let hasOddLength = false;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    obj[currentChar] = (obj[currentChar] || 0) + 1;
  }

  for (const char in obj) {
    if (obj[char] % 2 === 0) {
      length += obj[char];
    } else {
      hasOddLength = true;
      length += obj[char] - 1;
    }
  }

  return hasOddLength ? length + 1 : length;
};

// console.log(longestPalindrome("aaaAaaaa"));
// console.log(longestPalindrome("ccc"));
// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("b"));
// console.log(longestPalindrome("bb"));

//TODO-------------->LONGEST COMMON PREFIX

//LOOK
//in comparison problems, you alway seem to need:
//new variable to hold the result
//variable to hold the data is being compared
//iteration of some kind
//**should always handle edge cases */
//might be smart to think about WHICH should be your comparison case
//might also be good to think about alteratives to nested loops...

//input: array strings
//output: string
//method: somehow compare the characters at the same position in each string...
//handle edge cases of empty string and array with one word
//start with first word using a for loop
//compare characters from first word to characters in the other words at the same index

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let result = "";
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || char !== strs[j][i]) {
        return result;
      }
    }
    result += char;
  }
  return result;
};

console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

//fastest solution found:

var longestCommonPrefix = function (strs) {
  // checking constraints. if length is false, meaning zero, return empty string.
  if (!strs.length) return "";
  //set first string in array as a variable
  let itemStorage = strs[0];
  //initialize empty string to store result
  let commonPrefix = "";
  //use map method to iterate through the array and find the shortest string to use for comparison. shortest is set to itemStorage variable.
  strs.map((item) => {
    if (item.length <= itemStorage.length) {
      itemStorage = item;
    }
  });
  //Within the loop, the every method is called on the strs array, which returns true if every string in the array has the current character at the current index.
  for (let i = 0; i < itemStorage.length; i++) {
    //if every method returns true, current letter is added to empty string
    if (strs.every((stringItem) => stringItem[i] === itemStorage[i])) {
      commonPrefix = commonPrefix + itemStorage[i];
      //if not, breaks out of loop
    } else {
      break;
    }
  }
  //returns result
  return commonPrefix;
};
