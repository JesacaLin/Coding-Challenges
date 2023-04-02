//Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

//Technically using Regex
// function disemvowel(str) {
//   const noVowels = str.replace(/[aeiou]/gi, '')
//     return noVowels

// }

function disemvowel(str) {
  //create a vowels object
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  //create empty string to store letters that are not vowels
  let result = "";
  //loop through str to check it against the vowels object
  for (let i = 0; i < str.length; i++) {
    //make sure it is all lowercase to capure the cap input.
    let letter = str[i].toLowerCase();
    //Using bracket notation, this means if the object does not contain the value of letter, execute the code block.
    //if not, concatenate that letter onto result.
    if (!vowels[letter]) {
      result += str[i];
    }
  }
  //return result
  return result;
}

console.log(disemvowel("CodeSmith")); // => 'CdSmth'
console.log(disemvowel("BANANA")); // => 'BNN'
console.log(disemvowel("hello world")); // => 'hll wrld'
