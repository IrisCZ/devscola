describe("stringCalculator", function() {

  beforeEach(function() {
  });
  it("gives 0 numbers", function() {
     expect(stringCalculator.add("")).toEqual(0);
  });
  it("gives 1 number", function() {
     expect(stringCalculator.add("12")).toEqual(12);
  });
  it("gives 3 numbers", function() {
     expect(stringCalculator.add("1,3,5")).toEqual(9);
  });
  it("gives 3 numbers with line break", function() {
     expect(stringCalculator.add("1\n\n\n3\n5")).toEqual(9);
  });
  it("gives 3 numbers with delimiter", function() {
     expect(stringCalculator.add("-\n1-3-5")).toEqual(9);
  });
  it("contains negative numbers", function() {
     expect(stringCalculator.add("1,-3,-5")).toEqual("Error. Numbers -3 and -5 not allowed");
  });
});
