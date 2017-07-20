describe("FizzBuzzKata", function() {

  beforeEach(function() {
  });

  it("returns the number if it is not divisible by 3 or 5", function() {
    expect(fizzBuzzKata.print()[0]).toEqual(1);
    expect(fizzBuzzKata.print()[6]).toEqual(7);
  });

  it("returns Fizz if number is divisible by 3", function() {
    expect(fizzBuzzKata.print()[2]).toEqual("Fizz");
    expect(fizzBuzzKata.print()[5]).toEqual("Fizz");
  });

  it("returns Buzz if number is divisible by 5", function() {
    expect(fizzBuzzKata.print()[4]).toEqual("Buzz");
    expect(fizzBuzzKata.print()[19]).toEqual("Buzz");
  });

  it("returns FizzBuzz if number is divisible by 3 and 5", function() {
    expect(fizzBuzzKata.print()[14]).toEqual("FizzBuzz");
    expect(fizzBuzzKata.print()[89]).toEqual("FizzBuzz");
  });

});
