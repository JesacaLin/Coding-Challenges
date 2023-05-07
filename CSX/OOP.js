//introduce
// const personStore = {
//   greet: function () {
//     console.log("hello");
//   },
//   introduce: function () {
//     console.log(`Hi, my name is ${this.name}`);
//   },
// };

// function personFromPersonStore(name, age) {
//   const person = Object.create(personStore);
//   person.name = name;
//   person.age = age;
//   return person;
// }

// const sandra = personFromPersonStore("Sandra", 26);

// // Uncomment this line to check your work!
// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

//PersonConstructor
// function PersonConstructor() {
// 	this.greet = function(){
//     console.log('hello')
//   }
// }

// const simon = new PersonConstructor();

// // Uncomment this line to check your work!
// simon.greet(); // -> Logs 'hello'

//-->personfromConstructor

// function PersonConstructor() {
//     this.greet = function() {
//       console.log('hello');
//     }
//   }

//   function personFromConstructor(name, age) {
//       // add code here
//     const newPerson = new PersonConstructor()
//       Object.assign(newPerson, {name, age})
//       return newPerson
//   }

//   const mike = personFromConstructor('Mike', 30);

//   // Uncomment these lines to check your work!
//   console.log(mike.name); // -> Logs 'Mike'
//   console.log(mike.age); // -> Logs 30
//   mike.greet(); // -> Logs 'hello'

function PersonConstructor() {
  this.greet = function () {
    console.log("hello");
  };
}

function personFromConstructor(name, age) {
  // add code here
  const newPerson = new PersonConstructor();
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
}

const mike = personFromConstructor("Mike", 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

//-->MAKE PERSON

// function makePerson(name, age) {
//   const obj = {};
//   obj.name = name;
//   obj.age = age;
//   return obj;
// }

// const vicky = makePerson("Vicky", 24);

// // Uncomment these lines to check your work!
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

// //personStore
// const personStore = {
// 	greet: function(){
//   console.log('hello')
// }
// };

// // Uncomment this line to check your work!
// personStore.greet(); // -> Logs 'hello'

//personFromPersonStore
// const personStore = {
//   greet: function () {
//     console.log("hello");
//   },
// };

// function personFromPersonStore(name, age) {
//   // add code here
//   const newObj = Object.create(personStore);
//   newObj.name = name;
//   newObj.age = age;
//   return newObj;
// }

// const sandra = personFromPersonStore("Sandra", 26);

// // Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'
