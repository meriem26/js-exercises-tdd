var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  expect(largerThanTen([4, 10, 32, 9, 21])).toEqual([32, 21]);
  expect(largerThanTen([4, 10, 32, 9, 21])).toHaveLength(2);
  expect(largerThanTen([4, 10, 32, 9, 21])).not.toEqual([]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
