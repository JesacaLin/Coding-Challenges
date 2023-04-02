// Create a function isOdd that accepts a number argument. isOdd will return true if the number is odd and false if the number is even.

// ADD CODE HERE
//cretae a function isOdd with a num as argument
//create if/else statement to evaluate num

function isOdd(num) {
  //   if (num % 2 === 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  return num % 2 === 0 ? false : true;
}

// Uncomment these to check your work!
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false
