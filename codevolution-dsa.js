//TODO --> Fibonacci Sequence and Big O notation
//problem: given a number 'n', find the first 'n' elemtns of the Fibonacci dequence

//initialize new empty array with given numbers added already
//initialize a loop n times to add first two values together.
//create variables to store last, second to last values
//push to array
//return array

// function findFibo(n) {
//   const array = [0, 1]; //O(1) constant time
//   for (let i = 2; i < n; i++) {
//     array[i] = array[i - 1] + array[i - 2]; //O(n) Linear
//   }
//   return array; //0(1) constant time
// }

//Big-O = O(n): Linear

// console.log(findFibo(2));
// console.log(findFibo(7));

//TODO-->Factorial

//given an integer 'n', find the factorial of that integer

//what is a factorial? - a non-negative integer is the product of all positivie integers less than or equal to "n"

//have a counter variable to store changing values
//initialize a reverse loop multiple n times
//retrn the counter variable

// function factorials(n) {
//   let counter = n;
//   for (let i = n; i > 1; i--) {
//     counter *= i - 1;
//   }
//   return counter;
// }
// //Big O = O(n)
// console.log(factorials(5));

//TODO --> Give a natural number 'n', determine if the number is prime or not

//set condition if it's divisible by 2?
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(5));
// console.log(isPrime(4));
// console.log(isPrime(15));

//TODO --> Give a positive ineger 'n', determine if the number is a power of 2 or not.

//what is a power of 2?
//an integer is a power of two if there exists an integer 'x' such that 'n' === 2 to power of x.
//test that integer is positive
//initial a while loop?
//use if statement to test if number is power of two

// function isPowerOfTwo(num) {
//   if (num <= 0) return false;
//   for (let i = 0; i < num; i++) {
//     if (num === 2 ** i) {
//       return true;
//     }
//   }
//   return false;
// }

//Big O = O(log n)

// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(1));

//TODO --> Fibonacci Sequence with recursion
//problem: given a number 'n', find the nth elemtns of the Fibonacci dequence

// function findFiboRecursion(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   } else {
//     return findFiboRecursion(n - 1) + findFiboRecursion(n - 2);
//   }
// }

// console.log(findFibo(0));
// console.log(findFibo(1));
// console.log(findFibo(8));

//Big-O = O(n): Linear

// console.log(findFibo(2));
// console.log(findFibo(7));

//TODO-->Factorial-recursion

//given an integer 'n', find the factorial of that integer

//what is a factorial? - a non-negative integer is the product of all positivie integers less than or equal to "n".

// function recursiveFact(n) {
//   //base case
//   if (n == 1 || n == 0) {
//     return 1;
//   } else {
//     return n * recursiveFact(n - 1);
//   }
// }
// console.log(recursiveFact(5));

//Big-O = O(n)

//TODO --> Linear Search
//Problem - Given an array of 'n' elemens and a target element 't', find the index of 't', find the index of 't' in the array. Return -1 if the target element is not found.

//initialize a loop to compare elements of array to t
//return index
//return -1 if not found
//fast way of doing with indexOf? but it's not a linear search

// function linearSearch(array, t) {
//   // for (let i = 0; i < array.length; i++){
//   //     if (array[i] === t){
//   //         return i
//   //     }
//   // }
//   // return -1

//   let i = 0;
//   while (i < array.length) {
//     if (array[i] === t) {
//       return i;
//     }
//     i++;
//   }
//   return -1;

//   // return array.indexOf(10)
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// console.log(linearSearch([-5, 2, 10, 4, 6], 6));
// console.log(linearSearch([-5, 2, 10, 4, 6], 20));

//big O = O(n)

//TODO --> Binary Search

//initialize function with array and t as parameters
//if array is not sorted, it has to be sorted first.
//set pointer variable to the front and back of the array
//create loop to divide the array

// function binarySearch(array, t) {
//   let left = 0;
//   let right = array.length - 1;
//   //while there are still values in the array
//   while (left <= right) {
//     //divide the array in half to find midpoint
//     let mid = Math.floor((left + right) / 2);
//     //check to see if t equals to mid value of the array. No need to keep searching
//     if (array[mid] === t) {
//       return mid;
//       //if t is less than middle element then search left half of the array.
//     } else if (array[mid] < t) {
//       left = mid + 1;
//       //if t is more than middle element then we search the right half of the array.
//     } else {
//       right = mid - 1;
//     }
//   }
//   //if array is empty, return -1
//   return -1;
// }
//Big-O = O(logn) logarithmic time complexity
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], -5));
// console.log(binarySearch([-5, 2, 4, 6, 10], 11));

//TODO --> Binary Search - recursion

//base case is an empty array? OR left is <= right?

// function recursionBinary(array, t) {
//   let left = 0;
//   let right = array.length - 1;
//   let mid = Math.floor((left + right) / 2);
//   if (right < 0) {
//     return -1;
//   }

//   if (array[mid] === t) {
//     return mid;
//   } else if (array[mid] < t) {
//     left = recursionBinary(mid + 1);
//   } else {
//     recursionBinary(mid - 1);
//   }
// }

// console.log(recursionBinary([-5, 2, 4, 6, 10], 10));
// console.log(recursionBinary([-5, 2, 4, 6, 10], -5));
// console.log(recursionBinary([-5, 2, 4, 6, 10], 11));
// console.log(recursionBinary([], 2));

//TODO --> BUBBLE SORT

// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr)
// console.log(arr);

//Bubble sort reversed
//initialize a variable to store whether values have been swapped
//use a do while loop to have code execute at least once
//initialize a for loop
//use if statement to decide if first value is bigger than 2nd value
//change swap status
//do while condition - if swapped, then code runs again. if not, loop ends

// function bubbleSortReversed(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [8, 20, -2, 4, -6];
// bubbleSortReversed(arr);
// console.log(arr);

//big O = O(n^2) - quadratic time complexity
//n squared

//TODO --> Insertion Sort

// function insertionSort(arr) {
//   //starts a loop to iterate over each element in the array starting from second element
//   for (let i = 1; i < arr.length; i++) {
//     //initialize variable to the value of the current element being processed
//     let numberToInsert = arr[i];
//     //initialize variable to store the index of the element to the left of numberToInsert
//     let j = i - 1;
//     //start while loop, running as long as there are values in the sorted sub-list to the left
//     while (j >= 0 && arr[j] > numberToInsert) {
//       //shifts value of the element at index j one position to the right
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     //inserts numberToInsert into its correct position in the sorted sub-list by setting the value of the element at index j+1 to numberToInsert.
//     arr[j + 1] = numberToInsert;
//   }
// }
// const arr = [8, 20, -2, 4, -6];
// const arr = [-6, 20, 8, -2, 4];
// insertionSort(arr);
// console.log(arr);

//TODO --> Quick Sort + Recursion

//establish base case
// set the pivot as the last element in the array.
//initialize two empty arrays
//loop through the array.
//use conditional: if an element is smaller than pivot, you push it to array1, if it's larger, push to array2.
//what if the value is the same??
//then returned concat array1, pivot, array2 but you must call the quicksort function again.

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const pivot = arr[arr.length - 1];
//   let arr1 = [];
//   let arr2 = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       arr1.push(arr[i]);
//     } else {
//       arr2.push(arr[i]);
//     }
//   }

//   return [...quickSort(arr1), pivot, ...quickSort(arr2)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr));

//TODO -->
//establish base case
//divide the array in half
//create variables to store left and right subarrays.
//use recursion, return the value of calling merge and passing in mergesort on left and right
//create helper function to merge the values, passing in leftArr and rightArr as parameters
//establish empty array to hold sorted Array values
//initialize a while loop, checking if left and right arr has length
//use conditional to check the first element of the subarrays
//if left is less than/equal to right, push to sorted Array but also remove it from the old array
//if right, also push, then shift the elements
//if one of the arrays is empty, exit the loop
//using spread operator, merge the sorted array and whatever array still containing elements

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, mid);
//   let rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr));

//TODO --> Cartesian Product
//validate that arrays are not -1
//initialize an empty array to sort the result, return result
//start for loop for first array
//start inner while loop
//add the result of each interation to result

function cartesianProduct(arr1, arr2) {
  if (arr1.length < 1 || arr2.length < 1) {
    return [];
  }
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(cartesianProduct(arr1, arr2));

//TODO --> climbing staircare - recursion

function climbingStaircase(n) {
  //base case - there is only one way to climb 0 or 1 steps
  if (n <= 1) {
    return 1;
  } else {
    //add up the number of ways to climb n -1 steps and n - 2 steps
    return climbingStaircase(n - 1) + climbingStaircase(n - 2);
  }
}

// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(4));

//TODO --> Tower of Hanoi
//You can initialize three arrays to represent the three rods, and then populate the starting rod with the disks. As you move the disks from one rod to another, you can remove them from the source rod array and push them onto the destination rod array.
//shift 'n-1' disks from 'A' to 'B', using 'C' (when required)
//Shift last disk from 'A' to 'C' (this is also base case)
//Shift 'n-1' disks from 'B' to 'C', using 'A' (when required)

// function towerOfHanoi(n, fromRod, toRod, usingRod){
//   //base case
//   if(n === 1){
//     console.log(`shift ${n} from ${fromRod} to ${toRod}`);
//     return
//   }
//   towerOfHanoi(n - 1, fromRod, usingRod, toRod)
//     console.log(`shift ${n} from ${fromRod} to ${toRod}`);
//   towerOfHanoi(n -1, usingRod, toRod, fromRod )

// }
// towerOfHanoi(3, 'A', 'C', 'B')

//shift 'n-1' disks from 'A' to 'B', using 'C' (when required)
//Shift last disk from 'A' to 'C' (this is also base case)
//Shift 'n-1' disks from 'B' to 'C', using 'A' (when required)
// function towerOfHanoi(n, rodA, rodC, rodB) {
//   //base case
//   if (n === 1) {
//     console.log(`shift ${n} from ${rodA} to ${rodC}`);
//     return;
//   }
//   towerOfHanoi(n - 1, rodA, rodB, rodC);
//   console.log(`shift ${n} from ${rodA} to ${rodB}`);
//   towerOfHanoi(n - 1, rodC, rodA, rodB);
// }
// towerOfHanoi(3, "A", "C", "B");
