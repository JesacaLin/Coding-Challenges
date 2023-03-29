let people = ["Greg", "Mary", "Devon", "James"];
// Using a loop, iterate through this array and console.log all of the people.
// for(let i = 0; i < people.length; i++){
//     console.log(people[i])
// }

// Write the command to remove "Greg" from the array.
// people.shift();
// console.log(people);

// Write the command to remove "James" from the array.
// people.pop()
// console.log(people);

// Write the command to add "Matt" to the front of the array.
// people.unshift('Matt');
// console.log(people);

// Write the command to add your name to the end of the array.
// people.push('Jesaca')
// console.log(people);

// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
// let i = 0;
// while (i < people.length){
//     console.log(people[i]);
//     if(people[i] === 'Mary') break;
//     i++
// }

// Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// console.log(people);
// let newPeople = people.slice(2);
// console.log(newPeople);

// Write the command that gives the indexOf where "Mary" is located.
// console.log(people.indexOf("Mary"));

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
// console.log(people.indexOf("Foo"));
// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
// let withBob = people.concat("Bob");
// console.log(withBob);

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
// console.log(programming);

// Change the difficulty to the value of 7.
programming.difficulty = 7;

// Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;

// Write the command to add a new key called isFun and a value of true to the programming object.
programming["isFun"] = true;

// Using a loop, iterate through the languages array and console.log all of the languages.
let langs = programming.languages;
for (let i = 0; i < langs.length; i++) {
  console.log(langs[i]);
}

// Using a loop, console.log all of the keys in the programming object.
for (let key in programming) {
  console.log(key);
}

// Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
  console.log(programming[key]);
}

console.log(programming);
