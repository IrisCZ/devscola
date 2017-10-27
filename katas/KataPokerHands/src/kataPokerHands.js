var kataPokerHands = {
  VALUES : ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"],

  card : function(cardName) {
    return {
      value: cardName[0],
      suit: cardName[1],
      puntuationValue: this.VALUES.indexOf(cardName [0])
    }
  },

  checkHighestCard : function(aCard, otherCard) {
    if(otherCard.puntuationValue > aCard.puntuationValue){
      return otherCard;
    } else if(aCard.puntuationValue > otherCard.puntuationValue) {
      return aCard;
    } else {
      return "Tie!"
    }
  }

}
