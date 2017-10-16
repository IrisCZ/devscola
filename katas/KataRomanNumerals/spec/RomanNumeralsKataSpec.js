describe("romanNumeralsKata", function() {

  beforeEach(function() {
  });

  it("returns I when pases 1", function() {
    expect(romanNumeralsKata.print(1)).toEqual("I");
  });
  it("returns III when pases 3", function() {
    expect(romanNumeralsKata.print(3)).toEqual("III");
  });
  it("returns IV when pases 4", function() {
    expect(romanNumeralsKata.print(4)).toEqual("IV");
  });
  it("returns V when pases 5", function() {
    expect(romanNumeralsKata.print(5)).toEqual("V");
  });
  it("returns VIII when pases 8", function() {
    expect(romanNumeralsKata.print(8)).toEqual("VIII");
  });
  it("returns X when pases 10", function() {
    expect(romanNumeralsKata.print(10)).toEqual("X");
  });
  it("returns XI when pases 11", function() {
    expect(romanNumeralsKata.print(11)).toEqual("XI");
  });
  it("returns XV when pases 15", function() {
    expect(romanNumeralsKata.print(15)).toEqual("XV");
  });  it("returns XVII when pases 17", function() {
      expect(romanNumeralsKata.print(17)).toEqual("XVII");
    });
  it("returns XXI when pases 21", function() {
    expect(romanNumeralsKata.print(21)).toEqual("XXI");
  });

});
