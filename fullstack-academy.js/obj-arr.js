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

// let letters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];
// let leetChars = [
//   "@",
//   "8",
//   "(",
//   "|)",
//   "3",
//   "ph",
//   "g",
//   "#",
//   "l",
//   "_|",
//   "|<",
//   "1",
//   "|'|'|",
//   "//",
//   "0",
//   "|D",
//   "(,)",
//   "|2",
//   "5",
//   "+",
//   "|_|",
//   "|/",
//   "|/|/'",
//   "><",
//   "j",
//   "2",
// ];

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

// let animalNoises = [
//   {
//     dog: {
//       America: "Woof! Woof!",
//       Germany: "Wau Wau!",
//       England: "Bow wow!",
//       Uruguay: "Jua jua!",
//       Afrikaans: "Blaf!",
//       Korea: "Mong mong!",
//       Iceland: "Voff voff!",
//       Albania: "Ham!",
//       Algeria: "Ouaf ouaf!",
//     },
//   },
//   {
//     cat: {
//       America: "Meow",
//       Germany: "Miauw!",
//       England: "mew mew",
//       Uruguay: "Miau Miau!",
//       Afrikaans: "Purr",
//       Korea: "Nyaong!",
//       Iceland: "Kurnau!",
//       Albania: "Miau",
//       Algeria: "Miaou!",
//     },
//   },
//   {
//     chicken: {
//       America: "Cluck cluck",
//       Germany: "tock tock tock",
//       England: "Cluck Cluck",
//       Uruguay: "gut gut gdak",
//       Afrikaans: "kukeleku",
//       Korea: "ko-ko-ko",
//       Iceland: "Chuck-chuck!",
//       Albania: "Kotkot",
//       Algeria: "Cotcotcodet",
//     },
//   },
// ];

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

// const frequencyAnalysis = (str) => {
//   str = str.toLowerCase();
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!(str[i] in obj)) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]]++;
//     }
//   }
//   return obj;
// };

// console.log(frequencyAnalysis("abca")); // => {a: 2, b: 1, c: 1}

// Dog Breeder
// Define a function, dogBreeder, that accepts up to two optional arguments:

// name (string)
// age (number)
// dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is 'Steve'. If the user doesn't define the dog's age, assume the dog's age is 0.

//returning an obj - can use constructor or establish an empty obj and assign values to it, then return the obj.
//default parameters
//edge case: when only age is present...what to do about the name?

// const dogBreeder = (name = "Steve", age = 0) => {
//   if (typeof name === "number") {
//     age = name;
//     name = "Steve";
//   }

//   let obj = {
//     name: name,
//     age: age,
//   };

//   return obj;
// };

// console.log(dogBreeder("Sam", 12)); // => {name: 'Sam', age: 12}

// console.log(dogBreeder(15)); // => {name:'Steve', age: 15}

// Attendance Check
// Define a function, attendanceCheck, that accepts a string argument corresponding to a day of the week.

// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.
//input: string - day of the week;
//output: array - of names
//notes: returns NEW array.
//gameplan: how to extract deeply nested objects?
//based on the input string, pull every obj's info for that date, maybe push it to an array, then iterate through and pull out true booleans and return the names?
//iterate through the inner most array to search for any true booleans.

// let classRoom = [
//   {
//     Marnie: [
//       { Monday: true },
//       { Tuesday: true },
//       { Wednesday: true },
//       { Thursday: true },
//       { Friday: true },
//     ],
//   },
//   {
//     Lena: [
//       { Monday: false },
//       { Tuesday: false },
//       { Wednesday: true },
//       { Thursday: false },
//       { Friday: true },
//     ],
//   },
//   {
//     Shoshanna: [
//       { Monday: true },
//       { Tuesday: true },
//       { Wednesday: false },
//       { Thursday: true },
//       { Friday: false },
//     ],
//   },
//   {
//     Jessa: [
//       { Monday: false },
//       { Tuesday: false },
//       { Wednesday: false },
//       { Thursday: false },
//       { Friday: true },
//     ],
//   },
// ];

// function attendanceCheck(dayOfWeek) {
//   let wasPresent = [];
//   for (let i = 0; i < classRoom.length; i++) {
//     const studentObj = classRoom[i];
//     const studentName = Object.keys(studentObj)[0];
//     const studentSchedule = studentObj[studentName];

//     for (let j = 0; j < studentSchedule.length; j++) {
//       const dayObj = studentSchedule[j];
//       const dayName = Object.keys(dayObj)[0];

//       if (dayName === dayOfWeek && dayObj[dayName]) {
//         wasPresent.push(studentName);
//       }
//     }
//   }
//   return wasPresent;
// }

// // console.log(classRoom[0]["Marnie"]);
// //for loop to iterate through the people
// //OR EXTRACT EACH OBJECT into it's own array??
// console.log(attendanceCheck("Monday"));
// console.log(attendanceCheck("Wednesday"));

//LOOK - ROUND TWO
//iterate through the array of transactions
//create variable to store the amount.
//pulling out the value of amount key

//input: array of objects
//output: interger, sum of amount

// let transactions = [
//   {
//     name: "Tons of glitter",
//     amount: 70
//   },
//   {
//     name: "Porcelain Pink Flamingos",
//     amount: 92
//   },
//   {
//     name: "Chandelier replacement",
//     amount: 10000,
//   },
//   {
//     name: "Dinner at TGIF x6",
//     amount: 350
//   }
// ];

// const lastFridayNight = (trans) =>{
//   let total = 0
//   for(let i = 0; i < trans.length; i++){
//     const currentTrans = trans[i]
//     total += currentTrans.amount
//   }
//   return total;
// }

// console.log(lastFridayNight(transactions)) // => 10512);

//handle edge cases of objs having different number of keys.
//iterate through the objs
//compare the values of each key.

// const compareObjects = (obj1, obj2) =>{
//   //how to find number of keys in an obj?
//   if(Object.keys(obj1).length !== Object.keys(obj2).length){
//     return false
//   };

//   for(let key in obj1){
//     if(obj1[key] !== obj2[key]){
//       return false
//     }
//   }
//   return true;
// }

// console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));

// console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }));

//build a leetCodex obj, might not need a constructor since I"m only doing pairs.
//iterate thorugh letters and push each pair to the obj
//declare a variable to hold the new translated string
//translate by iterating through the string
//declare a variable to hold the current letter
//iterate through the keys of the leetcodex
//if matches, push the value to the new string
//return string

// let letters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let leetChars = [
//   "@",
//   "8",
//   "(",
//   "|)",
//   "3",
//   "ph",
//   "g",
//   "#",
//   "l",
//   "_|",
//   "|<",
//   "1",
//   "|'|'|",
//   "//",
//   "0",
//   "|D",
//   "(,)",
//   "|2",
//   "5",
//   "+",
//   "|_|",
//   "|/",
//   "|/|/'",
//   "><",
//   "j",
//   "2",
// ];

// const leetTranslator = (str) => {
//   let leetCodex = {};
//   for (let i = 0; i < letters.length; i++) {
//     let currentLetter = letters[i];
//     let currentLeetChar = leetChars[i];
//     leetCodex[currentLetter] = currentLeetChar;
//   }

//   let translation = "";
//   //translate
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i].toLowerCase();
//     let leetChar = leetCodex[currentChar];
//     // If the current character is not a letter, use the original character
//     if (leetChar === undefined) {
//       translation += currentChar;
//     } else {
//       translation += leetChar;
//     }
//   }
//   return translation;
// };

// console.log(leetTranslator("Fullstack"));
// console.log(leetTranslator("#0|D|D3|2"));

// let animalNoises = [
//   { 'dog': {
//     'America' : 'Woof! Woof!',
//     'Germany' : 'Wau Wau!',
//     'England' : 'Bow wow!',
//     'Uruguay' : 'Jua jua!',
//     'Afrikaans' : 'Blaf!',
//     'Korea' : 'Mong mong!',
//     'Iceland' : 'Voff voff!',
//     'Albania' : 'Ham!',
//     'Algeria' : 'Ouaf ouaf!'
//     }
//   },
//   { 'cat': {
//     'America' : 'Meow',
//     'Germany' : 'Miauw!',
//     'England' : 'mew mew',
//     'Uruguay' : 'Miau Miau!',
//     'Afrikaans' : 'Purr',
//     'Korea' : 'Nyaong!',
//     'Iceland' : 'Kurnau!',
//     'Albania' : 'Miau',
//     'Algeria' : 'Miaou!'
//     }
//   },
//   { 'chicken': {
//     'America' : 'Cluck cluck',
//     'Germany' : 'tock tock tock',
//     'England' : 'Cluck Cluck',
//     'Uruguay' : 'gut gut gdak',
//     'Afrikaans' : 'kukeleku',
//     'Korea' : 'ko-ko-ko',
//     'Iceland' : 'Chuck-chuck!',
//     'Albania' : 'Kotkot',
//     'Algeria' : 'Cotcotcodet'
//     }
//   }
// ];

// function petSounds(name, country){
//   for (let i = 0; i < animalNoises.length; i++){
//     let currentAnimal = animalNoises[i];
//     if(name in currentAnimal){
//       let countrySounds = currentAnimal[name];
//       let noise = countrySounds[country];
//       name = name[0].toUpperCase() + name.slice(1);
//       return  `${name}s in ${country} say ${noise}`
//     }
//   }
// };

// console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!

// console.log(petSounds('cat', 'Korea')); // => Cats in Korea say Nyaong!

// Frequency Analysis
// Define a function frequencyAnalysis that accepts a string of lower-case letters as an argument.

// frequencyAnalysis should return an object containing the amount of times each letter appeared in the string.

// function frequencyAnalysis(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else{
//       obj[str[i]] = 1;
//     }
//   }
//   // for (const key in obj){

//   // }
//   return obj;
// }

// console.log(frequencyAnalysis("abca")); // => {a: 2, b: 1, c: 1}

function dogBreeder(name, age = 0) {
  if (typeof name === "number") {
    age = name;
    name = "Steve";
  }

  const obj = {
    name: name,
    age: age,
  };

  return obj;
}
console.log(dogBreeder("Sam", 12));
console.log(dogBreeder(15));
console.log(dogBreeder("Bobby"));
