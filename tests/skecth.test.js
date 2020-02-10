const sum = require("../sketch");

test("adds 1 + 2 to equal", () => {
  expect(sum(1, 2)).toEqual(3);
});
