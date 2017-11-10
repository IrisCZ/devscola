var NUMBER_OF_CARDS = 24;
var container = document.querySelector('.container');
var attemptsCounter = document.querySelector('.attemptsCounter');
var matchesCounter = document.querySelector('.matchesCounter');

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
  if(isMatched(cardsToCompare[0], cardsToCompare[1])){
    blockCardsToCompare(cardsToCompare[0], cardsToCompare[1]);
    updateMatches();
    updateAttempts();

    if(parseInt(matchesCounter.innerHTML) === 12){
      setTimeout(function() {
        stopTime();
        showModal();
        storageWinnerInfo();
      }, 1000);
    }
    return;
  }
  setTimeout(function(){
    cardsToCompare[0].reverse();
    cardsToCompare[1].reverse();
    cardsToCompare.splice(0, 2);
    updateAttempts();

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
    t = setTimeout(add, 800);
}
function stopTime() {
  clearTimeout(t);
}
timer();
function updateMatches() {
  matchesCounter.innerHTML = parseInt(matchesCounter.innerHTML) + 1;
}
function updateAttempts() {
  attemptsCounter.innerHTML = parseInt(attemptsCounter.innerHTML) + 1;
}
function isMatched(cardA, cardB){
  return cardA.id === cardB.id;
}
function blockCardsToCompare(cardA, cardB) {
  cardA.block();
  cardB.block();
  cardsToCompare = [];
}

function refreshPage(){
    window.location.reload();
}

function showModal(){
  document.querySelector('.modal-window').classList.remove("hidden");
}

function closeModal(){
  document.querySelector('.modal-window').classList.add("hidden");
}

function storageWinnerInfo(){
  localStorage.setItem('attempts', 'matchesCounter.innerHTML');
  localStorage.setItem('time', 'timeCounter.innerHTML');
  localStorage.setItem('date', 'newDate()');
  var winner= [];
  var attempts = localStorage.getItem('attempts');
  var time = localStorage.getItem('time');
  var date = localStorage.getItem('date');
  winner.push(time, attempts, date);
  console.log(winner);
  return winner;
}

function bestWinners(){
  winner = storageWinnerInfo();
  var tableFameWinners = 3;
  var winners = [];
  var firstWinner = 0;
  for(var i = 0; i < tableFameWinners; i++){
    if(winner[0] > firstWinner){
      winners.push(winner);
    }
  }
  return winners;
}
/* table */
function createTable(tableData) {
  var tableFame = document.querySelector('.tableFame');
  var tBody = document.querySelector('tbody');
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

  rowData.forEach(function(cellData) {
    var cell = document.createElement('td');
    cell.appendChild(document.createTextNode(cellData));
    row.appendChild(cell);
  });

  tBody.appendChild(row);
  });

  tableFame.appendChild(tBody);
}
var winners =[["00:00", "01", "12.00 07/07/07"], ["00:00", "01", "12.00 07/07/07"], ["00:00", "01", "12.00 07/07/07"],["00:00", "01", "12.00 07/07/07"],["00:00", "01", "12.00 07/07/07"]]
// var winners = bestWinners();
createTable(winners);
