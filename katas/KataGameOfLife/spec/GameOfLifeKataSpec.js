describe("gameOfLifeKata", function() {

  it("returns false if population is less than two", function() {
    expect(gameOfLifeKata.underpopulation(0)).toEqual(true);
    expect(gameOfLifeKata.underpopulation(2)).toEqual(false);
    expect(gameOfLifeKata.underpopulation(3)).toEqual(false);
  });

  it("returns false if overcrowding is more than three", function() {
    expect(gameOfLifeKata.overcrowding(2)).toEqual(false);
    expect(gameOfLifeKata.overcrowding(3)).toEqual(false);
    expect(gameOfLifeKata.overcrowding(4)).toEqual(true);
  });

  it("returns true if nextGeneration is two or three", function() {
    expect(gameOfLifeKata.aliveForNextGeneration(1)).toEqual(false);
    expect(gameOfLifeKata.aliveForNextGeneration(3)).toEqual(true);
    expect(gameOfLifeKata.aliveForNextGeneration(4)).toEqual(false);
  });

  it("returns true if alive is three", function() {
    expect(gameOfLifeKata.alive(1)).toEqual(false);
    expect(gameOfLifeKata.alive(3)).toEqual(true);
    expect(gameOfLifeKata.alive(4)).toEqual(false);
  });
});
