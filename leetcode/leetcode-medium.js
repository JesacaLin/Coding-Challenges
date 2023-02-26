//TODO --> MAXIMUM SUBARRAY

//input: array
//output: sum of subarray
//question is asking to find the largest sum produced by a subarray. NOT RETURN THE ACTUAL SUBARRAY!!

///use dynamic programming
//need to iterate over input array and use Math.max
//at each iteration, you update the current element and the sum of the previous element AND current element. creating new running total of new max ending at each position.
//returns max value in the modified array.
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

console.log(maxSubArray([-2, -1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([3, 2, -3, -1, 1, -3, 1, -1]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([0]));
console.log(maxSubArray([2]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
