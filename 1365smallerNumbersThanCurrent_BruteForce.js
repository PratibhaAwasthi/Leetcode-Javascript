/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  var result = [];
  for (let i = 0; i < nums.length; i++) {
    let k = 0;
    for (let j = nums.length - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        k++;
      }
    }
    result.push(k);
  }

  return result;
};
