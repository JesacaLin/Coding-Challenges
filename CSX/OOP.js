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
const personStore = {
  greet: function () {
    console.log("hello");
  },
};

function personFromPersonStore(name, age) {
  // add code here
  const newObj = Object.create(personStore);
  newObj.name = name;
  newObj.age = age;
  return newObj;
}

const sandra = personFromPersonStore("Sandra", 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
