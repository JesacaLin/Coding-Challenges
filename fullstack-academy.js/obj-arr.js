// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards".
// Define a function, lastFridayNight, takes an array of transactions.
// lastFridayNight should return the total amount she spent last Friday night.

// let transactions = [
//   {
//     name: "Tons of glitter",
//     amount: 70,
//   },
//   {
//     name: "Porcelain Pink Flamingos",
//     amount: 92,
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350,
//   },
// ];
//iterate through the array of objects
//set counter
//add key with amount to counter
//return counter
// function lastFridayNight(transactions) {
//   let counter = 0;
//   for (let i = 0; i < transactions.length; i++) {
//     counter += transactions[i].amount;
//   }
//   return counter;
// }

// console.log(lastFridayNight(transactions)); // => 10512

// Compare Objects
// Define a function, compareObjects, that accepts two objects as arguments.

// compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.

//use for...in loop to iterte through the obj's keys
//compare the keys
// const compareObjects = function (obj1, obj2) {
//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   for (let key in obj2) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(compareObjects({ name: "nick" }, { name: "nick" })); // -> true

// console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 })); // -> false

// Leet Translator
// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".
// Define a function called leetTranslator that take a string of normal characters.
// leetTranslator should return a new string that is the translation of the original string into leet.
// The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

//declare an empty object
//iterate through letters
//store current letters index's value in a variable
//store current leetChars at the same index in a variable
//set the empty object's key value pairs with the two variables

function leetTranslator(str) {
  //create an object and use it as a translator
  let obj = {};
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let currentLeetChar = leetChars[i];
    obj[currentLetter] = currentLeetChar;
  }
  //translate the str by using the obj
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    let leetChar = obj[letter];
    newStr += leetChar;
  }
  return newStr;
}

console.log(leetTranslator("Fullstack"));
