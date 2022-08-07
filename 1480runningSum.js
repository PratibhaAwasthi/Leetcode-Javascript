/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let runningSum = [];
  let key = 0;

  for (let i = 0; i < nums.length; i++) {
    key = key + nums[i];
    runningSum.push(key);
  }
  return runningSum;
};
