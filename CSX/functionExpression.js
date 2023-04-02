// Convert the function named functionDeclaration to an anonymous function expression and assign it to a variable called myFunc.

//MODIFY THE CODE BELOW

function functionDeclaration() {
  return "Hi there!";
}

let myFunc = functionDeclaration;

console.log(myFunc()); //should log: "Hi there!"

//For this challenge, convert the function myJob from ES5 syntax to arrow function syntax.

let myJob = (name, profession) => {
  return `Hi, my name is ${name} and I'm a ${profession}.`;
};

// function myJob (name, profession) {
//     return `Hi, my name is ${name} and I'm a ${profession}.`
//   }

console.log(myJob("Jon", "Knights Watchman"));
