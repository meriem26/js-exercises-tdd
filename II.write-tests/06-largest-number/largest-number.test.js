var getLargestNumber = require("./largest-number");
test("Get the largest number", function() {
  expect(getLargestNumber([3, 21, 88, 4, 36])).toEqual(88);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
