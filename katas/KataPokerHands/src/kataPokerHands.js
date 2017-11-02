var kataPokerHands = {
  VALUES : ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"],

  card : function(cardName) {
    return {
      value: cardName[0],
      suit: cardName[1],
      puntuationValue: this.VALUES.indexOf(cardName[0])
    }
  },

  hand : function(cardList) {
    var that = this;
    return {
      values: function() {
        var handValues = [];
        for (var i = 0; i < cardList.length; i++){
          handValues.push(that.card(cardList[i]).puntuationValue);
        }
        return handValues;
      },
      sort: function() {
        function compareNumbers(a, b) {
          return b - a;
        }
        var handSorted = this.values().sort(compareNumbers);
        return handSorted;
      },
    }
  },

  checkWinner : function(white, black) {
    var winner;
    winner = this.checksHighestStaightFlush(white, black);
    if(winner){
      return winner;
    }
    winner = this.checksHighestFourOfAKind(white, black);
    if(winner){
      return winner;
    }
    winner = this.checksHightestFullHouse(white, black);
    if(winner){
      return winner;
    }
    winner = this.winnerFlush(white, black);
    if(winner){
      return winner;
    }
    winner = this.checksHightestStraight(white, black);
    if(winner){
      return winner;
    }
    winner = this.checksHighestThreeOfAKind(white, black);
    if(winner){
      return winner;
    }
    winner = this.checksHighestOfTwoPair(white,black);
    if(winner){
      return winner;
    }
    winner = this.checksHighestPair(white,black);
    if(winner){
      return winner;
    }
    winner = this.checksHighestCard(white, black);
    if (winner){
      return winner;
    }
  },

  checksHighestCard : function(white, black, index){
    if (!index){
      index = 0;
    }
    if (index >= white.length) {
      return "Tie!";
    }
    var whiteSorted = this.hand(white).sort()[index];
    var blackSorted = this.hand(black).sort()[index];
    if (whiteSorted > blackSorted){
      console.log("White wins with: " + this.VALUES[whiteSorted]);
      return white;
    } else if (whiteSorted < blackSorted){
      console.log("black wins with: " + this.VALUES[blackSorted]);
      return black;
    }
    return this.checksHighestCard(white, black, index + 1);
  },


  checksHighestPair : function(white, black) {
    if(!this.checksPair(white) && !this.checksPair(black)){
      return;
    }
    var whiteHasPair = this.checksPair(white);
    var blackHasPair = this.checksPair(black);
    if(!whiteHasPair){
      console.log("Black wins with a pair of: " + this.VALUES[this.checksPair(black)]);
      return black;
    }
    if(!blackHasPair){
      console.log("White wins with a pair of: " + this.VALUES[this.checksPair(white)]);
      return white;
    }
    if(whiteHasPair > blackHasPair) {
      console.log("White wins with a pair of: " + this.VALUES[this.checksPair(white)]);
      return white;
    }
    if(whiteHasPair < blackHasPair) {
      console.log("Black wins with a pair of: " + this.VALUES[this.checksPair(black)]);
      return black;
    }
  },

  checksTwoPairs : function(cardList) {
    var handSorted = this.hand(cardList).sort();
    var pairs = [];
    for(var i = 0; i < (handSorted.length - 1); i++) {
      if(handSorted[i] === handSorted[i + 1]) {
        pairs.push(handSorted[i]);
      }
    }
    if(pairs.length === 2){
      return pairs.sort();
    }
  },
  checksHighestOfTwoPair : function(white, black) {
    if(!this.checksTwoPairs(white) && !this.checksTwoPairs(black)){
      return;
    }
    var whiteHasTwoPairs = this.checksTwoPairs(white);
    var blackHasTwoPairs = this.checksTwoPairs(black);
    if(!whiteHasTwoPairs){
      console.log("Black wins with two pairs.");
      return black;
    }
    if(!blackHasTwoPairs){
      console.log("White wins with two pairs.");
      return white;
    }
    if(this.compareTwoPairs(whiteHasTwoPairs, blackHasTwoPairs) === whiteHasTwoPairs){
      return white;
    }
    if(this.compareTwoPairs(whiteHasTwoPairs, blackHasTwoPairs) === blackHasTwoPairs){
      return black;
    }
  },
  compareTwoPairs : function(whitePairs, blackPairs) {
    var whiteHasTwoPairs = whitePairs.sort();
    var blackHasTwoPairs = blackPairs.sort();
    if(whiteHasTwoPairs[0] > blackHasTwoPairs[0]){
      console.log("White wins with two pairs.");
      return whitePairs;
    }
    if(whiteHasTwoPairs[0] < blackHasTwoPairs[0]){
      console.log("Black wins with two pairs.");
      return blackPairs;
    }
    if(whiteHasTwoPairs[0] === blackHasTwoPairs[0]){
      if(whiteHasTwoPairs[1] > blackHasTwoPairs[1]){
        console.log("White wins with two pairs.");
        return whitePairs;
      }
      if(whiteHasTwoPairs[1] < blackHasTwoPairs[1]){
        console.log("Black wins with two pairs.");
        return blackPairs;
      }
    }
  },

  checksFourOfAKind : function(cardList){
    return this.checkNumberOfRepetitions(cardList, 4);
  },
  checksThreeOfAKind : function(cardList) {
    return this.checkNumberOfRepetitions(cardList, 3);
  },
  checksPair : function(cardList) {
    return this.checkNumberOfRepetitions(cardList, 2);
  },
  checksEqualNumbers : function(handRestHand){
    if(handRestHand[0] === handRestHand[1]){
      return handRestHand[0];
    }
  },

  checkNumberOfRepetitions : function(cardList, repetitions) {
    var handSorted = this.hand(cardList).sort();
    var index = repetitions - 1;
    for(var i = 0; i < (handSorted.length - index); i++) {
      if(handSorted[i] === handSorted[i + index]) {
        return handSorted[i];
      }
    }
  },

  checksHighestThreeOfAKind : function(white, black) {
    if(!this.checksThreeOfAKind(white) && !this.checksThreeOfAKind(black)){
      return;
    }
    var whiteHasThreeOfAKind = this.checksThreeOfAKind(white);
    var blackHasThreeOfAKind = this.checksThreeOfAKind(black);

    if(!whiteHasThreeOfAKind){
      console.log("Black wins with a three of a kind of: " + this.VALUES[this.checksThreeOfAKind(black)]);
      return black;
    }
    if(!blackHasThreeOfAKind){
      console.log("White wins with a three of a kind of: " + this.VALUES[this.checksThreeOfAKind(white)]);
      return white;
    }
    if(whiteHasThreeOfAKind > blackHasThreeOfAKind) {
      console.log("White wins with a three of a kind of: " + this.VALUES[this.checksThreeOfAKind(white)]);
      return white;
    }
    if(whiteHasThreeOfAKind < blackHasThreeOfAKind) {
      console.log("Black wins with a three of a kind of: " + this.VALUES[this.checksThreeOfAKind(black)]);
      return black;
    }
  },

  checksHightestStraight : function(white, black){
    var whiteHasStraight = this.checksStraight(white);
    var blackHasStraight = this.checksStraight(black);

    if(!whiteHasStraight && !blackHasStraight){
      return;
    }

    if(!whiteHasStraight){
      console.log("Black wins with a Straight");
      return black;
    }
    if(!blackHasStraight){
      console.log("White wins with a Straight");
      return white;
    }
    if(whiteHasStraight > blackHasStraight) {
      console.log("White wins with a Straight");
      return white;
    }
    if(whiteHasStraight < blackHasStraight) {
      console.log("Black wins with a Straight");
      return black;
    }
  },

  checksStraight : function(cardList) {
    var handSorted = this.hand(cardList).sort();
    var highestCardOfStraight = handSorted[0];
    var consecutive = true;
    for (var i = 0; i < handSorted.length - 1; i++) {
      if (handSorted[i] !== handSorted[i + 1] + 1) {
        consecutive = false;
      }
    }
    if(consecutive){
      return highestCardOfStraight;
    }
  },

  winnerFlush : function(white, black) {
    var whiteHasFlush = this.checksFlush(white);
    var blackHasFlush = this.checksFlush(black);

    if(!whiteHasFlush && !blackHasFlush){
      return;
    }
    if(whiteHasFlush && blackHasFlush){
      return this.checksHighestCard(white, black);
    }
    if(whiteHasFlush){
      console.log("White wins with a Flush");
      return white;
    }
    if(blackHasFlush){
      console.log("Black wins with a Flush");
      return black;
    }
  },

  checksFlush : function(cardList) {
    var flush = true;
    for(var i = 0; i < cardList.length - 1; i++){
      var suit = this.card(cardList[i]).suit;
      if(suit !== this.card(cardList[i + 1]).suit){
        flush = false;
      }
    }
    return flush;
  },

  checksFullHouse(cardList){
    var handHasFullHouse = [];
    var handFullThree = this.checksThreeOfAKind(cardList);
    var handRestHand = this.getRestOfHand(cardList, handFullThree);
    var handFullPair = this.checksEqualNumbers(handRestHand);
    if(handFullThree && handFullPair){
      handHasFullHouse.push(handFullThree, handFullPair);
      return handHasFullHouse;
    }
    return;
  },

  checksHightestFullHouse : function(white, black){
    var whiteHasFullHouse = this.checksFullHouse(white);
    var blackHasFullHouse = this.checksFullHouse(black);

    if(!whiteHasFullHouse && !blackHasFullHouse){
      return;
    }
    if(whiteHasFullHouse && blackHasFullHouse){
      whiteHasTwoPairs = whiteHasFullHouse;
      blackHasTwoPairs = blackHasFullHouse;
      if(this.compareTwoPairs(whiteHasTwoPairs, blackHasTwoPairs) === whiteHasTwoPairs){
        return white;
        console.log("White wins with Full House");
      }
      if(this.compareTwoPairs(whiteHasTwoPairs, blackHasTwoPairs) === blackHasTwoPairs){
        return black;
        console.log("Black wins with Full House");
      }
    }
    if(whiteHasFullHouse){
      console.log("White wins with a Full House");
      return white;
    }
    if(blackHasFullHouse){
      console.log("Black wins with a Full House");
      return black;
    }

  },

  getRestOfHand : function(cardList, toRemove) {
    var restOfHand = [];
    cardList = this.hand(cardList).values();
    for(var i = 0; i < cardList.length; i++){
        if(toRemove !== cardList[i]){
        restOfHand.push(cardList[i]);
      }
    }
    return restOfHand;
  },
  checksHighestFourOfAKind : function(white, black) {
    var whiteHasFourOfAKind = this.checksFourOfAKind(white);
    var blackHasFourOfAKind = this.checksFourOfAKind(black);

    if(!whiteHasFourOfAKind && !blackHasFourOfAKind){
      return;
    }
    if(!whiteHasFourOfAKind){
      console.log("Black wins with a four of a kind of: " + this.VALUES[this.checksFourOfAKind(black)]);
      return black;
    }
    if(!blackHasFourOfAKind){
      console.log("White wins with a three of a kind of: " + this.VALUES[this.checksFourOfAKind(white)]);
      return white;
    }
    if(whiteHasFourOfAKind > blackHasFourOfAKind) {
      console.log("White wins with a three of a kind of: " + this.VALUES[this.checksFourOfAKind(white)]);
      return white;
    }
    if(whiteHasFourOfAKind < blackHasFourOfAKind) {
      console.log("Black wins with a three of a kind of: " + this.VALUES[this.checksFourOfAKind(black)]);
      return black;
    }
  },

  checksStraightFlush : function(cardList) {
    if(this.checksFlush(cardList) && this.checksStraight(cardList)){
      return this.checksStraight(cardList);
    }
    return
  },

  checksHighestStaightFlush : function(white, black) {
    var whiteStraightFlush = this.checksStraightFlush(white);
    var blackStraightFlush = this.checksStraightFlush(black);

    if(!whiteStraightFlush && !blackStraightFlush){
      return;
    }
    if(!whiteStraightFlush){
      console.log("Black wins with Straight Flush.");
      return black;
    }
    if(!blackStraightFlush){
      console.log("White wins with Straight Flush.");
      return white;
    }
    if(whiteStraightFlush > blackStraightFlush) {
      console.log("White wins with Straight Flush.");
      return white;
    }
    if(whiteStraightFlush < blackStraightFlush) {
      console.log("Black wins with Straight Flush");
      return black;
    }
    },

}
