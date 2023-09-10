const theSum = (...nums) => {
  return nums.reduce((prev, curr) => prev + curr, 0);
};

module.exports = theSum;
