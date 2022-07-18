var minimumSum = function (num) {
  var numArr = [];
  let i = 0;
  while (i <= 3) {
    numArr.push(num % 10);
    i++;
    num = Math.floor(num / 10);
  }

  numArr.sort((a, b) => a - b);

  num1 = 10 * numArr[0] + numArr[2];
  num2 = 10 * numArr[1] + numArr[3];

  return num1 + num2;
};
