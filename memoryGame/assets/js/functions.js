var NUMBER_OF_CARDS = 24;
var container = document.querySelector('.container');
var attemptsCounter = document.querySelector('.attemptsCounter').innerHTML;
var attemptsCount = 0;
var matchesCounter = document.querySelector('.matchesCounter');
var matchesCount = 0;

var Card = function(container) {
  this.id = getRandomInt();
  var frontClass = 'front'+ this.id;
  var htmlElement = document.createElement('li');
  htmlElement.className = 'card back';
  container.appendChild(htmlElement);
  var isBack = function() {
    return htmlElement.classList.contains('back');
  }
  var isFront = function() {
    return htmlElement.classList.contains("front");
  }
  this.reverse = function(){
    if(isFront()){
      htmlElement.classList.remove("front");
      htmlElement.classList.remove(frontClass);
      htmlElement.classList.add("back");
      return;
    }
  }
  this.block = function(){
    htmlElement.classList.add("blocked");
  }
  var flip = function(){
    if(isBack()){
      htmlElement.classList.remove("back");
      htmlElement.classList.add("front");
      htmlElement.classList.add(frontClass);
      select(this);
      return;
    }
  }.bind(this);
  htmlElement.onclick = flip;
}
var cardsToCompare = [];
function select(card) {
  if(cardsToCompare.length == 2){
    setTimeout(function(){}, 1000);
  }
  cardsToCompare.push(card);
  if(cardsToCompare.length == 2){
    compareCards();
  }
}
function compareCards(){
  if(cardsToCompare[0].id === cardsToCompare[1].id){
    blockCardsToCompare(cardsToCompare[0], cardsToCompare[1]);
    counter(++matchesCount, matchesCounter);
    ++attemptsCounter;
    if(matchesCount === 12){
      setTimeout(function() {
        stopTime();
        showModal();
      }, 1000);
    }
    return;
  }
  setTimeout(function(){
    cardsToCompare[0].reverse();
    cardsToCompare[1].reverse();
    cardsToCompare.splice(0, 2);
    ++attemptsCounter;
    attemptsCounter.innerHTML = attemptsCounter;

    console.log(attemptsCounter);

    // counter(++attemptsCount, attemptsCounter);
  }, 800);
}
var ids = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
var cards = [];

for(var i = 0; i < NUMBER_OF_CARDS; i++){
  cards.push(new Card(container));
}

function getRandomInt() {
  var newNum = Math.floor(Math.random() * (ids.length - 1));
  return ids.splice(newNum, 1)[0];
}

function counter(count, counter) {
  counter.innerHTML = count;
};
//timer
var seconds = 0, minutes = 0, hours = 0,
    t;
function add() {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
          minutes = 0;
      }
  }
  document.querySelector('.timeCounter').textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

  timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
function stopTime() {
  clearTimeout(t);
}
timer();

function blockCardsToCompare(cardA, cardB) {
  cardA.block();
  cardB.block();
  cardsToCompare = [];
}

function refreshPage(){
    window.location.reload();
}

function showModal(){
  document.querySelector('.modal-window').classList.add("modal-window-display");
}

function closeModal(){
  document.querySelector('.modal-window').classList.remove("modal-window-display");
}
