/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let read1 = m - 1;
  let read2 = n - 1;
  let write = m + n - 1;

  while (read2 >= 0) {
    if (read1 >= 0 && nums1[read1] >= nums2[read2]) {
      nums1[write] = nums1[read1];
      read1 -= 1;
    } else {
      nums1[write] = nums2[read2];
      read2 -= 1;
    }
    write -= 1;
  }
};
