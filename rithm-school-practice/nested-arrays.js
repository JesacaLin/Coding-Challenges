// Exercises
// Given the following array, write a function called printEvens that console.logs all of the even numbers

// let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

// const printEvens = () =>{
//     for (let row of nestedArr){
//         for (let element of row){
//             if (element % 2 === 0) console.log(element);
//         }
//     }
// }

// const printEvens = () => {
//     nestedArr.forEach((arr) => {
//       arr.filter((num) => num % 2 === 0).forEach((evenNum) => console.log(evenNum));
//     });
//   };

// printEvens();

// // 2
// // 4
// // 6
// // 8
// // 10
// // 12

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array

//when it's really tricky like this, it's best to break it up into nuggets of tasks and store small bits of info into variables. then play with those variables.

// let nestedArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const sumTotal = () => {
//   const flattenedArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
//   const total = flattenedArr.reduce((acc, curr) => acc + curr, 0);
//   return total;
// };

// console.log(sumTotal()); // 21

// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

//QUESTIONS: How many rotations when taken arr length into account?
//HOW: remove last element and append it to the front, depending on how many rotations.

//TODO --> WANT TO DO THIS AGAIN

function rotate(arr, num) {
  var amount = num % arr.length;
  for (var i = 0; i < amount; i++) {
    arr.unshift(arr.pop());
  }
  console.log(arr);
  return arr;
}

// rotate([1,2,3], 4) // [3,1,2]
// rotate([1,2,3], 2) // [2,3,1]
// rotate([1,2,3], 3) // [1,2,3]

//TODO --> TRY THIS AGAIN
// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

//game plan: have to create the inner array and push it a certain amount of times to the outer array.

//initialize empty variable to hold empty outter array
//iterate through outer loop
//initalize empty variable to hold empty inner array
//iterate through inner loop
//push through variables to inner array
//alternating between X and O
//push the finished inner loop to outer loop a set amount of times
//return outter

const makeXOGrid = (rows, columns) => {
  const outterRowArray = [];
  for (let i = 0; i < rows; i++) {
    const innerColumnArray = [];
    for (let j = 0; j < columns; j++) {
      innerColumnArray.push(j % 2 === 0 ? "X" : "Y");
    }
    outterRowArray.push(innerColumnArray);
  }
  return outterRowArray;
  // const x = "X";
  // const y = "O";
  // const outterRowArray = [];
  // const innerColumnArray = [];
  // for(let i = 0; i < columns / 2 ; i++){
  //     innerColumnArray.push(x, y)
  // }
  // for (let i = 0; i < rows; i++){
  //     outterRowArray.push(innerColumnArray)
  // }
  // console.log(outterRowArray);
  // return outterRowArray
};

makeXOGrid(1, 4);
/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3, 2);
/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3, 3);
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
