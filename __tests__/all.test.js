// toBe;
// toEqual;
// toBeTruthy;
// toBeFalsy;
// toContain;
// toHaveLength;
// toMatch;
// toThrow;
// toHaveBeenCalledWith;
// toBeGreaterThan;
// toBeLessThan;
// toBeNull;
// toBeUndefined;
// toBeCloseTo;
// toHaveProperty;
// toHaveLength;
// toBeInstanceOf;
// toMatchObject;
// toMatchInlineSnapshot;
// toStrictEqual;

// expect.any(), expect.anything(), and expect.arrayContaining() are special Jest matchers used for making assertions in your test cases.

const data = require("../all");

test("check if the length is 6", () => {
  expect(data).toHaveLength(6);
});

test("check if the length is not 5", () => {
  expect(data).not.toHaveLength(5);
});

test("check if contains 6", () => {
  expect(data).toContain(6);
});

test("check if the first element is a num", () => {
  expect(isNaN(data[0])).not.toBeTruthy();
});

expect.extend({
  toBeLargerThan(num1, num2) {
    if (num1 > num2) {
      return {
        message: () => `correct ${num1} is greater than ${num2}`,
        pass: true,
      };
    } else {
      return {
        message: () => `Error ${num1} is greater than ${num2}`,
        pass: false,
      };
    }
  },
});

test("check if the first num is greater than the second", () => {
  expect(10).toBeLargerThan(9);
});

test("check if the first num is greater than the second", () => {
  expect(10).toBeLargerThan(9);
});

test("any", () => {
  expect("someValue").toEqual(expect.any(String));
});

test("anything", () => {
  expect("someValue").toEqual(expect.anything());
});

test("arrayContaining", () => {
  expect(data).toEqual(expect.arrayContaining([1, 2]));
});
