var buildArray = function (nums) {
  let ans = [];
  //looping the elements directly into the array ans

  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }

  return ans;
};
