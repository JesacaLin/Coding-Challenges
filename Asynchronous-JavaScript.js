LOOK; //CHALLENGE: setTimeout

function setCode() {
  console.log("I am at the beginning of the code");
  setTimeout(() => {
    console.log(`I am in the setTimeout callback function.`);
  }, 600);
  console.log("I am at the end of the code");
}

setCode();

LOOK; //CHALLENGE: forEach
function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

const delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
  setTimeout(() => {
    console.log(`printing element ${i}`);
  }, delayTime);
}

forEach(delays, delayLog);

LOOK; //CHALLENGE: intersection

//Need to study this one
//input: array of arrays
//output: one array
function intersection(arrays) {
  //accumulator = starts as one of our arrays
  let acc = arrays.pop();
  //loop through array of arrays
  while (arrays.length) {
    const current = arrays.pop();
    const newArr = [];

    //compare current array with our accumulator
    //for each element in current
    //if that element exists in accumulator
    //push that element into a new array
    current.forEach((element) => {
      if (acc.inclues(element)) newArr.push(element);
    });
    //accumlator reassigned to new array
    acc = newArr;
  }
  // return our accumulator
  return acc;
}

const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// function intersection(arrays) {
//   return arrays.reduce((intersection, array) => {
//     return intersection.filter(element => array.includes(element));
//   });
// }
