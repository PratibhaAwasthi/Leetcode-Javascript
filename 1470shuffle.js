/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let output = [];
  let pnt1 = 0;
  let pnt2 = n;
  /*
      0 1 2 3 4 5
     [2,5,1,3,4,7]
     pnt1   pnt2
    
    */
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      output.push(nums[pnt1]);
      pnt1++;
    } else {
      output.push(nums[pnt2]);
      pnt2++;
    }
  }
  return output;
};
