var sortArrayByParity = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      [nums[count], nums[i]] = [nums[i], nums[count]];
      count++;
    }
  }
  return nums;
};
