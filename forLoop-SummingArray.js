//Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.

function getTheSum(arr) {
  arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
}

console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12]));
