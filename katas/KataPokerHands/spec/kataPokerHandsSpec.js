describe("checkWinner", function() {
  it("returns owner of highest card", function() {
    var white = ["6H", "3D", "KS", "9C", "2D"];
    var black = ["2C", "3H", "4S", "8C", "AH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("returns Tie! in case of draw", function() {
    var white = ["6H", "3D", "AS", "9C", "5D"];
    var black = ["6C", "3H", "AS", "9C", "5H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual("Tie!");
  });
  it("returns owner of highest card recursively", function() {
    var white = ["6H", "3D", "AS", "9C", "5D"];
    var black = ["6C", "3H", "AS", "9C", "2H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });

  it("checks that a pair wins over not fitted cards", function() {
    var white = ["6H", "9D", "AS", "5C", "4D"];
    var black = ["6C", "3H", "AS", "9C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("returns owner of highest pair", function() {
    var white = ["6H", "9D", "AS", "7C", "AD"];
    var black = ["6C", "3H", "AS", "9C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });

  it("checks that two pairs wins over a pair", function() {
    var white = ["6H", "9D", "AS", "9C", "6D"];
    var black = ["6C", "AH", "AS", "9C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });
  it("returns owner of highest two pairs", function() {
    var white = ["6H", "9D", "AS", "9C", "6D"];
    var black = ["6C", "AH", "AS", "6C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("returns owner of highest card with identical two pairs", function() {
    var white = ["6H", "9D", "AS", "AC", "6D"];
    var black = ["6H", "AH", "AS", "6C", "TH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });

  it("checks that Three of a Kind  wins over a pair", function() {
    var white = ["6H", "9D", "AS", "9C", "6D"];
    var black = ["6C", "4H", "4S", "4C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("returns owner of highest Three of a Kind", function() {
    var white = ["6H", "9D", "9S", "9C", "6D"];
    var black = ["6C", "4H", "4S", "4C", "3H"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });

  it("checks that Straight wins over Three of a Kind", function() {
    var white = ["3C", "4H", "5S", "7C", "6H"];
    var black = ["6H", "9D", "9S", "9C", "5D"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });
  it("returns owner of highest Straight", function() {
    var white = ["3C", "4H", "5S", "7C", "6H"];
    var black = ["6H", "7D", "8S", "9C", "TD"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });

  it("checks that Flush wins over Straight", function() {
    var white = ["3C", "4H", "5S", "7C", "6H"];
    var black = ["6H", "5H", "2H", "9H", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("returns owner of highest Flush", function() {
    var white = ["3C", "4C", "KC", "7C", "6C"];
    var black = ["6H", "5H", "2H", "9H", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("checks Flush tie", function() {
    var white = ["5C", "6C", "9C", "2C", "KC"];
    var black = ["6H", "5H", "2H", "9H", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual("Tie!");
  });

  it("checks that Full House wins over Flush", function() {
    var white = ["3C", "3H", "7S", "7C", "7H"];
    var black = ["6H", "5H", "2H", "9H", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });
  it("returns owner of highest Full House", function() {
    var white = ["3C", "3H", "3S", "7C", "7S"];
    var black = ["6H", "6C", "6S", "KS", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("checks that Four of a Kind  wins over Full House", function() {
    var white = ["9H", "9D", "9S", "9C", "6D"];
    var black = ["6H", "6C", "6S", "KS", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });
  it("returns owner of highest Four of a kind", function() {
    var white = ["9H", "9D", "9S", "9C", "6D"];
    var black = ["KD", "KC", "6S", "KS", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
  it("checks that Straight flush  wins over Four of a kind", function() {
    var white = ["4H", "6H", "5H", "7H", "3H"];
    var black = ["6H", "6C", "6S", "KS", "KH"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(white);
  });
  it("returns owner of highest Straight flush", function() {
    var white = ["4H", "6H", "5H", "7H", "3H"];
    var black = ["KD", "QD", "JD", "TD", "9D"];
    expect(kataPokerHands.checkWinner(white, black)).toEqual(black);
  });
});
