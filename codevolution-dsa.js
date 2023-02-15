//TODO --> Fibonacci Sequence and Big O notation
//problem: given a number 'n', find the first 'n' elemtns of the Fibonacci dequence

//initialize new empty array with given numbers added already
//initialize a loop n times to add first two values together.
//create variables to store last, second to last values
//push to array
//return array

function findFibo(n) {
  const array = [0, 1]; //O(1) constant time
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2]; //O(n) Linear
  }
  return array; //0(1) constant time
}

//Big-O = O(n): Linear

// console.log(findFibo(2));
// console.log(findFibo(7));

//TODO-->Factorial

//given an integer 'n', find the factorial of that integer

//what is a factorial? - a non-negative integer is the product of all positivie integers less than or equal to "n"

//have a counter variable to store changing values
//initialize a reverse loop multiple n times
//retrn the counter variable

function factorials(n) {
  let counter = n;
  for (let i = n; i > 1; i--) {
    counter *= i - 1;
  }
  return counter;
}
//Big O = O(n)
console.log(factorials(5));

//TODO --> Give a natural number 'n', determine if the number is prime or not

//set condition if it's divisible by 2?
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(15));

//TODO --> Give a positive ineger 'n', determine if the number is a power of 2 or not.

//what is a power of 2?
//an integer is a power of two if there exists an integer 'x' such that 'n' === 2 to power of x.
//test that integer is positive
//initial a while loop?
//use if statement to test if number is power of two

function isPowerOfTwo(num) {
  if (num <= 0) return false;
  for (let i = 0; i < num; i++) {
    if (num === 2 ** i) {
      return true;
    }
  }
  return false;
}

//Big O = O(log n)

// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(1));

//TODO --> Fibonacci Sequence with recursion
//problem: given a number 'n', find the nth elemtns of the Fibonacci dequence

function findFiboRecursion(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return findFiboRecursion(n - 1) + findFiboRecursion(n - 2);
  }
}

// console.log(findFibo(0));
// console.log(findFibo(1));
// console.log(findFibo(8));

//Big-O = O(n): Linear

// console.log(findFibo(2));
// console.log(findFibo(7));

//TODO-->Factorial-recursion

//given an integer 'n', find the factorial of that integer

//what is a factorial? - a non-negative integer is the product of all positivie integers less than or equal to "n".

function recursiveFact(n) {
  //base case
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * recursiveFact(n - 1);
  }
}
console.log(recursiveFact(5));

//Big-O = O(n)

//TODO --> Linear Search
//Problem - Given an array of 'n' elemens and a target element 't', find the index of 't', find the index of 't' in the array. Return -1 if the target element is not found.

//initialize a loop to compare elements of array to t
//return index
//return -1 if not found
//fast way of doing with indexOf? but it's not a linear search

function linearSearch(array, t) {
  // for (let i = 0; i < array.length; i++){
  //     if (array[i] === t){
  //         return i
  //     }
  // }
  // return -1

  let i = 0;
  while (i < array.length) {
    if (array[i] === t) {
      return i;
    }
    i++;
  }
  return -1;

  // return array.indexOf(10)
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));

//big O = O(n)
