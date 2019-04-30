var greetPeople = require("./greet-people"); //---> this how we export a function from other file
test("print list of names prefixed with Hello", function() {
  // ==> expected result should be inside the test
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var result = greetPeople(mentors);
  expect(result).toBe("Hello IrinaAshleighEtza");
});
// Arrange
// Act
// Assert
