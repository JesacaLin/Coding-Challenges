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
