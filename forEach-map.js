//Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// function makeCallback(i){
//     console.log(i)
// }

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

console.log(typeof forEach); // should log: 'function'
console.log(forEach(["a", "b", "c"], (i) => console.log(i))); // should log: 'a', 'b', 'c'

// function map(array, callback) {
//     const newArray = [];
//arrow function way of writing forEach?
//     array.forEach((arr) => {
//         newArray.push(callback(arr))
//     })
//     return newArray
//     }

function map(array, callback) {
  const newArray = [];
  forEach(array, function (element) {
    newArray.push(callback(element));
  });
  return newArray;
}

console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]
