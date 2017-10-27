describe("KataPokerHands: checking higher card", function() {

  beforeEach(function() {
  });

  it("Checks that Ace is higher than any number", function() {
    var aCard = kataPokerHands.card("AH");
    var otherCard = kataPokerHands.card("4D");
    expect(kataPokerHands.checkHighestCard(aCard, otherCard)).toEqual(aCard);
  });
  it("Checks what is the highest card without symbols", function() {
    var aCard = kataPokerHands.card("5H");
    var otherCard = kataPokerHands.card("6D");
    expect(kataPokerHands.checkHighestCard(aCard, otherCard)).toEqual(otherCard);
  });
  it("Checks draw between two cards", function() {
    var aCard = kataPokerHands.card("5H");
    var otherCard = kataPokerHands.card("5D");
    expect(kataPokerHands.checkHighestCard(aCard, otherCard)).toEqual("Tie!");
  });
  it("Checks what is the highest card with symbols", function() {
    var aCard = kataPokerHands.card("QH");
    var otherCard = kataPokerHands.card("AD");
    expect(kataPokerHands.checkHighestCard(aCard, otherCard)).toEqual(otherCard);
  });
});
