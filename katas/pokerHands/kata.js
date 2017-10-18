var hand1 = ["QS", "JD", "4H", "5C", "JC"];
var hand2 = ["JD", "10D", "QC", "3S", "JD"];


var JACK = 11;
var QUEEN = 12;
var KING = 13;
var ACE = 14;

check(hand1, hand2);


function check(white, black) {
  if(isStraightFlush(white) && isStraightFlush(black)){
    if(maxNumber(white) > maxNumber(black)){
      console.log("Blancas ganan con una escalera de color");
      return;
    }
    if(maxNumber(white) < maxNumber(black)){
      console.log("Negras ganan con una escalera de color");
      return;
    }
    console.log("Empate de escaleras de color");
    return;
  }
  if(isStraightFlush(white)){
    console.log("Blancas ganan con una escalera de color");
    return;
  }
  if(isStraightFlush(black)){
    console.log("Negras ganan con una escalera de color");
    return;
  }
  if(isFourOfAKind(white) > isFourOfAKind(black)){
      console.log("Blancas ganan con un Poker de " + isFourOfAKind(white));
      return;
  }
  if(isFourOfAKind(white) < isFourOfAKind(black)){
      console.log("Negras ganan con un Poker de " + isFourOfAKind(black));
      return;
  }
  if(isFullHouse(white) > isFullHouse(black)){
    console.log("Blancas ganan con un Full de Estambul de " + isFullHouse(white));
    return;
  }
  if(isFullHouse(white) < isFullHouse(black)){
    console.log("Negras ganan con un Full de Estambul de " + isFullHouse(black));
    return;
  }
  if(isFlush(white) > isFlush(black)){
    console.log("Blancas ganan con color a la carta " + isFlush(white));
    return;
  }
  if(isFlush(white) < isFlush(black)){
    console.log("Negras ganan con color a la carta " + isFlush(black));
    return;
  }
  if(isStraight(white) > isStraight(black)){
    console.log("Blancas ganan con escalera a la carta " + isStraight(white));
    return;
  }
  if(isStraight(white) < isStraight(black)){
    console.log("Negras ganan con escalera a la carta " + isStraight(black));
    return;
  }
  if(isThreeOfAKind(white) > isThreeOfAKind(black)){
    console.log("Blancas ganan con trío a la carta " + isThreeOfAKind(white));
    return;
  }
  if(isThreeOfAKind(white) < isThreeOfAKind(black)){
    console.log("Negras ganan con trío a la carta " + isThreeOfAKind(black));
    return;
  }
  if(isTwoPairs(white) > isTwoPairs(black)){
    console.log("Blancas ganan con dobles parejas");
    return;
  }
  if(isTwoPairs(white) < isTwoPairs(black)){
    console.log("Negras ganan con dobles parejas");
    return;
  }
  if((isTwoPairs(white) === isTwoPairs(black)) && (isTwoPairs(white) !== 0)){
    console.log("Empatan con dobles parejas");
    return;
  }
  if(isPair(white) > isPair(black)){
    console.log("Blancas ganan con una pareja de " + isPair(white));
    return;
  }
  if(isPair(white) < isPair(black)){
    console.log("Negras ganan con una pareja de " + isPair(black));
    return;
  }
  if(rankingAlones(white) > rankingAlones(black)){
    console.log("Blancas ganan con " + rankingAlones(white));
    return;
  }
  if(rankingAlones(white) < rankingAlones(black)){
    console.log("Negras ganan con " + rankingAlones(black));
    return;
  }
  console.log("Empatan con " + rankingAlones(white));
}

function isStraightFlush(hand){
  if (sameColor(hand) && consecutive(hand)){
    return true;
  }
  return false;
}

function isFourOfAKind(hand){
  for(var i = 0; i<hand.length; i++){
    var number = cardNumber(hand[i]);
    if(timesInHand(number,hand) === 4){
      return number;
    }
  }
  return 0;
}

function isFullHouse(hand){
  if (isThreeOfAKind(hand) && isPair(hand)){
    return isThreeOfAKind(hand);
  }
  return 0;
}

function isFlush(hand){
  if(sameColor(hand)){
    return maxNumber(hand);
  }
  return 0;
}

function isStraight(hand){
  if (consecutive(hand)){
    return maxNumber(hand);
  }
  return 0;
}

function isThreeOfAKind(hand){
  for(var i = 0; i < hand.length; i++){
    var number = cardNumber(hand[i]);
    if(timesInHand (number, hand) === 3){
      return number;
    }
  }
  return 0;
}

function isTwoPairs(hand){
  var firstPair = 0;
  var secondPair = 0;
  var alone = 0;
  for(var i = 0; i < hand.length; i++){
    var number = cardNumber(hand[i]);
    if(timesInHand(number, hand) === 2){
      if(firstPair === 0){
        firstPair = number;
      }
      if(number !== firstPair){
        secondPair = number;
      }
    }
    if(timesInHand(number, hand) === 1){
      alone = number;
    }
  }
  if((firstPair > 0) && (secondPair > 0)){
    var maxPair = firstPair;
    var minPair = secondPair;
    if(firstPair < secondPair){
      maxPair = secondPair;
      minPair = firstPair;
    }
    return maxPair * 100 + minPair * 10 + alone;
  }
  return 0;
}

function isPair(hand){
  for(var i = 0; i < hand.length; i++){
    var number = cardNumber(hand[i]);
    if(timesInHand (number, hand) === 2){
      return number;
    }
  }
  return 0;
}

function rankingAlones(hand){
  var handOrdered = order(hand);
  var total = 0;
  var factor = 10000;
  for(var i = 0; i < handOrdered.length; i++){
    var number = handOrdered[i];
    if(timesInHand(number, hand) === 1){
      total = total + number * factor;
      factor = factor / 10;
    }
  }
  return total;
}

function timesInHand(number,hand){
  var counter = 0;
  for(var i = 0; i < hand.length; i++){
    var card = hand[i];
    if (cardNumber(card) === number){
      counter = counter + 1;
    }
  }
  return counter;
}

function maxNumber(hand){
  var biggestNumber = 0;
  for(var i=0; i<hand.length; i++){
    var number = cardNumber(hand[i]);
    if (biggestNumber < number){
      biggestNumber = number;
    }
  }
  return biggestNumber;
}



function sameColor(hand){
  var handColor = cardColor(hand[0]);
  for (var i=1; i < hand.length; i++){
    var card = hand[i];
    var color = cardColor(card);

    if (handColor !== color){
      return false;
    }
  }
  return true;
}

function cardColor(card){
  if (card.length === 3){
    return card[2];
  }
  return card[1];
}

function cardNumber(card){
  if (card.length === 3){
    return Number(card[0] + card[1]);
  }
  var number = card[0];
  if(number === "J"){
    number = JACK;
  }
  if(number === "Q"){
    number = QUEEN;
  }
  if(number === "K"){
    number = KING;
  }
  if(number === "A"){
    number = ACE;
  }
  return Number(number);
}

function consecutive(hand){
  var handNumbers = order(hand);
  for (var i = 1; i<handNumbers.length; i++){
    var previous = handNumbers[i-1];
    if(handNumbers[i] !== (previous + 1)){
      return false;
    }
  }
  return true;
}

function order(hand){
  var handNumbers = [];
  for (var i = 0; i < hand.length; i++){
    var number = cardNumber(hand[i]);

    handNumbers.push(number);
  }
  handNumbers.sort(function(a, b) {
    return b - a;
  });
  return handNumbers;
}
