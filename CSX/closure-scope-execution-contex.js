//LOOK----->Delay

//input: callback, time
//output: string

function delay(callback, time) {
  return function () {
    setTimeout(callback, time);
  };
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

//LOOK----->saveOutput

function saveOutput(func, password) {
  const obj = {}; // create an empty object to store the function output
  return function (arg) {
    // return a function that accepts a single argument
    const currentValue = func(arg); // invoke the original function on the argument
    if (typeof arg === "string" && arg === password) {
      // check if the argument is a string and matches the password
      return obj; // return the object with all the previously passed-in arguments as keys and the corresponding outputs as values
    } else {
      obj[arg] = currentValue; // add the argument and its corresponding output to the object
      return currentValue; // return the current value of the function
    }
  };
}
// Uncomment these to check your work!
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }

//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
//LOOK----->
