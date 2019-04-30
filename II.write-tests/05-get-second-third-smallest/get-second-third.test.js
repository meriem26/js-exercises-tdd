var getSecondThird = require("./get-second-third");
test("Get the second and third smallest number", function() {
  expect(getSecondThird([90, 5, 11, 8, 6])).toEqual([6, 8]);
});
// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
test("Original array not changed", function() {
  var originaArray = [1, 2, 7, 9];
  var secondThird = getSecondThird(originaArray);
  expect(secondThird).toEqual([2, 7]);
  expect(originaArray).toEqual([1, 2, 7, 9]);
});
