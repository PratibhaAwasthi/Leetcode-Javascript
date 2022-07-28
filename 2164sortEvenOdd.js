var sortEvenOdd = function (nums) {
  let evenArr = [];
  let oddArr = [];
  let newNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }

  evenArr.sort((a, b) => a - b);
  oddArr.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      newNums.push(evenArr.shift());
    } else {
      newNums.push(oddArr.shift());
    }
  }
  return newNums;
};
