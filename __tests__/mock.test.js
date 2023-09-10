const mocker = require("../mock.js");

test("mocker", () => {
  const mocker = jest.fn((name) => `hello ${name}`);
  expect(mocker("ahmed")).toBe("hello ahmed");
  expect(mocker).toHaveBeenCalled();
});
