const theSum = require("../sum");

//test(name, fn, timeout)

describe("check the number", () => {
  describe("if one number or no numbers", () => {
    it("return null", () => {
      expect(theSum()).toBe(0);
    });

    it("return the number1", () => {
      expect(theSum(10)).toBe(10);
    });
  });

  describe("for all numbers", () => {
    it("return the number1 + number2", () => {
      expect(theSum(10, 11)).toBe(21);
    });

    it("return the number1 + number2 + number3", () => {
      expect(theSum(10, 11, 10)).toBe(31);
    });

    it("return the sum of all numbers", () => {
      expect(theSum(10, 11, 10, 1, 2, 3)).toBe(37);
    });
  });
});
