/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let checkSet = new Set();

  for (i = 0; i < arr.length; i++) {
    if (checkSet.has(arr[i] / 2) || checkSet.has(arr[i] * 2)) {
      return true;
    } else {
      checkSet.add(arr[i]);
    }
  }
  return false;
};
