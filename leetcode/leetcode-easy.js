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

var detectCapitalUse = function (word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
  for (let i = 1; i < word.length; i++) {
    let firstChar = word[0];
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    } else if (
      firstChar === firstChar.toUpperCase() &&
      word[i] !== word[i].toLowerCase()
    ) {
      return false;
    }
  }
  return true;
};

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

var twoSum = function (nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (currentVal + nums[j] === target) {
        newArray.push(i, j);
      }
    }
  }

  return newArray;
};
console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([3, 2, 4], 6)); //[1, 2]
console.log(twoSum([3, 3], 6)); //[0, 1]

//LOOK -------------->
//LOOK -------------->
//LOOK -------------->
//LOOK -------------->

//LOOK -------------->
//LOOK -------------->
//LOOK -------------->
