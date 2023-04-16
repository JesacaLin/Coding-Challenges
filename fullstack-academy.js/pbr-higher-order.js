// Very Odd
// Write a function, veryOdd, that accepts an array of numbers as an argument. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// function veryOdd (arr){
//     return arr.filter((num) => num % 2 !== 0);
//    }

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

// YOUR CODE BELOW
//input: array of nums
//output: a count of the number of even numbers it replaced

//check the array for even nums, replace with 'normie', count the occurance

//set up counter variable
//iterate through the array
//check for even number
//if even, replace with bracket notation
//incredment counter
//return counter

// function veryOddMutant (arr){
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 === 0){
//         arr[i] = 'normie';
//         counter++
//       };
//     };
//     return counter;
//   };

// Clone Machine
// Write a function cloneMachine, that, given an argument animal (represented as an object), returns a clone of animal.

// The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

// cloneMachine should also push the name of the clone to the parent's offspring array.

let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};

function cloneMachine(animalObj) {
  const clone = {
    name: `${animalObj.name}Clone`,
    species: animalObj.species,
    offspring: [],
  };

  animalObj.offspring.push(clone.name);

  return clone;
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone);
// {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly);
// {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
