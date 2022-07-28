var sortArrayByParity = function (nums) {
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
      result.push(nums[i]);
    } else {
      result.unshift(nums[i]);
    }
  }

  return result;
};
