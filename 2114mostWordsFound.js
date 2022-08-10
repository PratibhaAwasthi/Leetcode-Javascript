var mostWordsFound = function (sentences) {
  let max = 0;
  let temp = 0;
  let newSubArray = [];

  for (let i = 0; i < sentences.length; i++) {
    newSubArray = sentences[i].split(" ");
    temp = newSubArray.length;

    max = Math.max(max, temp);
  }

  return max;
};
