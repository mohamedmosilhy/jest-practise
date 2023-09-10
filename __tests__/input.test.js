const filterName = require("../input.js");

describe("validate the input name", () => {
  test("check if the name is empty", () => {
    expect(filterName()).toBe("unknown");
  });
  test("check for spaces at start and end", () => {
    expect(filterName(" mosilhy ")).toBe("mosilhy");
  });
  test("check if the length > 10", () => {
    expect(filterName("mohamed_sayed_mosilhy")).toBe("mohamed_say");
  });
  test("check if name not starts with _", () => {
    expect(filterName("_mohamed")).toBe("mohamed");
  });
});
