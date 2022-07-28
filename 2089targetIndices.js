var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  var resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      resultArr.push(i);
    }
    if (nums[i] > target) break;
  }
  return resultArr.sort((a, b) => a - b);
};
