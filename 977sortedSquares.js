var sortedSquares = function (nums) {
  //let result =[]
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums;
};
var sortedSquares = function (nums) {
  const squaredArray = [];
  for (x of nums) {
    squaredArray.push(x * x);
  }
  return squaredArray.sort();
};
