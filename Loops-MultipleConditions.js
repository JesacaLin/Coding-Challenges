/*Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.*/
//condition 1: find the sum of all the odd numbers in array2. Add that number to every element under 10 in array1
//condition 2: find the sum of all the even numbers in array2. add that number to every element over 10 in array1.

//I think I made the mistake of trying to push a new array when we are maybe mutating array1.

function addingAllTheWeirdStuff(array1, array2) {
  let newArr = [];
  let even = 0;
  let odd = 0;

  function isEven(num) {
    return num % 2 === 0;
  }
  even = array2.filter(isEven).reduce((a, b) => a + b);

  function isOdd(num) {
    return num % 2 !== 0;
  }
  odd = array2.filter(isOdd).reduce((a, b) => a + b);

  function isGreaterThan20(num) {
    return num > 20;
  }
  let big20 = array2.filter(isGreaterThan20);

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      newArr.push(array1[i] + odd);
    } else if (array1[i] > 10 && array1[i] < 20) {
      newArr.push(array1[i] + even);
    }
  }

  if (big20.length > 0) {
    newArr = newArr.map((x) => x + 1).slice(0, 6);
  }

  return newArr;
}

//Let me try again with regular loops and conidtionals - mutating array1...

//condition 1: find the sum of all the odd numbers in array2. Add that number to every element under 10 in array1
//condition 2: find the sum of all the even numbers in array2. add that number to every element over 10 in array1.
//BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.*/
/*
function addingAllTheWeirdStuff(array1, array2) {
  let oddSum = 0;
  let evenSum = 0;
  let isIt20 = false;
  //let up a loop and condition here to sum all the odd and even numbers in array2. set a condition that if array2 is greater than 20, set a boolean?
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
      oddSum += array2[i];
    } else {
      evenSum += array2[i];
    }
    if (array2[i] > 20) {
      isIt20 = true;
    }
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      array1[i] += oddSum;
    } else if (array1[i] > 10) {
      array1[i] += evenSum;
    }
    if (isIt20) {
      array1[i] += 1;
    }
  }
  return array1;
}
*/

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
