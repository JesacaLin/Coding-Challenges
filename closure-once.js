// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

//input: callback function
//output: function

// function once(cb) {
//   //indicates whether cb has been run
//   let hasRun = false;
//   //stores result of cb invocation
//   let result;

//   function oncifiedCB(...args) {
//     if (!hasRun) {
//       //invoke cb with args and store result in cashedResult
//       result = cb(...args);
//       //set hasRun to true;
//       hasRun = true;
//     }
//     return result;
//   }
//   return oncifiedCB;
// }

// const addByTwoOnce = once(function (num) {
//   return num + 2;
// });

// // UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5)); //should log 7
// console.log(addByTwoOnce(10)); //should log 7
// console.log(addByTwoOnce(9001)); //should log 7

//LOOK - SOLUTION FROM YOUTUBE

//Lindy T
//I used a counter - my code:

function once(cb_func) {
  let counter = 0; // keeps track of the number of times returned function is called
  let output = 0;

  function innerFunc(num) {
    if (counter === 0) {
      // if counter = 0, then returned function has not yet been called until now
      counter++;
      output = cb_func(num);
    }
    if (counter >= 1) {
      counter++;
      return output;
    }
  }

  return innerFunc;
}

const addByTwoOnce = once(function (num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //s
