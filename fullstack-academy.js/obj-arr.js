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

// function leetTranslator(str) {
//   //create an object and use it as a translator
//   let obj = {};
//   for (let i = 0; i < letters.length; i++) {
//     let currentLetter = letters[i];
//     let currentLeetChar = leetChars[i];
//     obj[currentLetter] = currentLeetChar;
//   }
//   //translate the str by using the obj
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i].toLowerCase();
//     let leetChar = obj[letter];
//     newStr += leetChar;
//   }
//   return newStr;
// }

// console.log(leetTranslator("Fullstack"));

// Pet Sounds

let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// Write a function petSounds that takes an animal name and a country name as arguments.
// Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.

//input: array: string in obj, string in embedded object
//ouput: string
//data is an array with three objects
//embedded withing the 3 objects is an obj of noises based on country
//game plan: store the retrieved data in variables then use template literal?
//use a loop and store the obj with the right animal in a variable
//then loop through is find the country
//but do I need a loop?

// function petSounds(animal, country) {
//   for (let i = 0; i < animalNoises.length; i++) {
//     let currentAnimal = animalNoises[i];
//     if (animal in currentAnimal) {
//       let countrySounds = currentAnimal[animal];
//       let sound = countrySounds[country];
//       animal = animal[0].toUpperCase() + animal.slice(1);
//       return `${animal}s in ${country} say ${sound}`;
//     }
//   }
// }
// console.log(petSounds("dog", "Iceland")); // => Dogs in Iceland say Voff voff!

// petSounds("cat", "Korea"); // => Cats in Korea say Nyaong!

// Frequency Analysis
// Define a function frequencyAnalysis that accepts a string of lower-case letters as an argument.

// frequencyAnalysis should return an object containing the amount of times each letter appeared in the string.

//iterate through the string
//add the elements of the string into the object as keys.
//increment if present

const frequencyAnalysis = (str) => {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj;
};

console.log(frequencyAnalysis("abca")); // => {a: 2, b: 1, c: 1}
