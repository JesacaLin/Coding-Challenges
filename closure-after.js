// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

//declare a function call after with two parameter callbackNumOfTimes and cb.

//set up a counter to keep track of the number of times a cb has run.

//set up a condition to determine if the number of times cb has been called, las been met.

// function after(callbackNumOfTimes, callback) {
//   let counter = 0;
//   function innerFunc(num) {
//     if (counter < callbackNumOfTimes) {
//       counter++;
//     }
//     if (counter === callbackNumOfTimes) {
//       return callback(num);
//     }
//   }
//   return innerFunc;
// }

// const called = function (string) {
//   return "hello " + string;
// };
// const afterCalled = after(3, called);

// // UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(afterCalled("world")); // -> undefined is printed
// console.log(afterCalled("world")); // -> undefined is printed
// console.log(afterCalled("world")); // -> 'hello world' is printed

//LOOK - Codesmith's solution

function after(numOfCalls, callback) {
  //establish our count variable
  let count = 0;
  //closure requires us to return a function
  return function (...arg) {
    //each time our returned function is called we need to increment our count
    count += 1;
    //We want to check if count is greater or equal to the numOfCalls that was passed in
    if (count >= numOfCalls) {
      //Making it bigger or equal to the numOfCalls parameter will ensure that the code will run even if the next call, the counter bigger than the current n
      return callback(...arg);
    }
  };
}

const called = function (string) {
  return "hello " + string;
};
const afterCalled = after(3, called);

console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> undefined is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

//LOOK - more of an explaination from youtube comments
// It's because you want the function to run even if it's been called more than (numOfCalls) times.
// For example, if numOfCalls has an argument of 5, the function will start executing when count===5. If you call the function again, count will be equal to 6, but you still want the function to run. Same if you call it again, count will be equal to 7, and you still want the function to run, etc.
