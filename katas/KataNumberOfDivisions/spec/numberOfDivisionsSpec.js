describe("numberOfDivisions", function() {

  beforeEach(function() {
  });

  it("the number of divisions of 6/2 equals 2", function() {
    expect(numberOfDivisions.print(6,2)).toEqual(2);
  });
  it("the number of divisions of 100/2 equals 6", function() {
    expect(numberOfDivisions.print(100,2)).toEqual(6);
  });

});
