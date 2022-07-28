var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  var count = 0;
  for (let i = 0; i < nums.length; i + 2) {
    count += nums[i];
  }

  return count;
};
