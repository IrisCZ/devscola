var numberOfCards = 24;
var container = document.querySelector('.container');
var attemptsCounter = document.querySelector('.attemptsCounter');
var matchesCounter = document.querySelector('.matchesCounter');
var timeDelay = 600;

var cardsToCompare = [];
var ids = [];
var cards = [];
var seconds = 0, minutes = 0, hours = 0, t;


function startGame(){
  setUserPreferences();
  for(var i = 0; i < numberOfCards; i++){
    cards.push(new Card(container));
  }
  timer();
}


function Card(container) {
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
function select(card) {
  if(cardsToCompare.length == 2){
    setTimeout(function(){}, timeDelay);
  }
  cardsToCompare.push(card);
  if(cardsToCompare.length == 2){
    compareCards();
  }
}
function compareCards(){
  var cardToFinish = numberOfCards / 2;
  if(isMatched(cardsToCompare[0], cardsToCompare[1])){
    blockCardsToCompare(cardsToCompare[0], cardsToCompare[1]);
    updateMatches();
    updateAttempts();

    if(parseInt(matchesCounter.innerHTML) === (cardToFinish)){
      setTimeout(function() {
        stopTime();
        storageWinnerInfo();
        showModal();
      }, timeDelay);
    }
    return;
  }
  setTimeout(function(){
    cardsToCompare[0].reverse();
    cardsToCompare[1].reverse();
    cardsToCompare.splice(0, 2);
    updateAttempts();

  }, timeDelay);
}

function getRandomInt() {
  var newNum = Math.floor(Math.random() * (ids.length - 1));
  return ids.splice(newNum, 1)[0];
}

//timer

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
  var winners = bestWinners();
  createTable(winners);
  document.querySelector('.modal-window').classList.remove("hidden");
}

function closeModal(element){
  element.closest('.modal-window').classList.add("hidden");
}
function showPersonalize(){
  document.querySelector('.modalPersonalize').classList.remove("hidden");
}
function hideStart(){
  document.querySelector('.modalStart').classList.add("hidden");
}
function toggleSelected(element){
   element.classList.toggle("selected");
   var siblings = getSiblings(element.parentNode.firstChild, element);
   for(var i = 0; i < siblings.length; i++){
     siblings[i].classList.remove("selected");
   }
}
function getSiblings(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling )
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );
    return r;
};

function bestWinners(){
  return JSON.parse(localStorage.getItem('winners')) || [];
}
function orderWinners(winners){
  var orderedWinners = [];
  orderedWinners = winners.sort(function(a, b) {
    return a.time > b.time;
  });
  return orderedWinners.splice(0,5);
}

function storageWinnerInfo(){
  var winners = bestWinners() || [];
  var result = {
    time: document.querySelector('.timeCounter').innerHTML,
    attempts: attemptsCounter.innerHTML,
    date: new Date().toLocaleString()
  }
  winners.push(result);
  winners = orderWinners(winners);

  localStorage.setItem('winners', JSON.stringify(winners));
}

function storagePlayerInfo(){
  var result = {
    name: document.querySelector('#name').value,
    bg: document.querySelector('.bgs .selected').dataset.bg,
    level: document.querySelector('.levels .selected').dataset.level,
  }

  localStorage.setItem('info', JSON.stringify(result));
  startGame();
}
function setUserPreferences(){
  var userInfo = JSON.parse(localStorage.getItem('info'));
  document.querySelector('.hello span').innerHTML = "Hello " + (userInfo.name || "stranger!");
  setBg(userInfo.bg);
  setLevel(userInfo.level);
}
function setBg(bg){
  if(bg === 'bg1'){
    document.querySelector('main').style.backgroundImage  = "url('assets/img/bg3.jpg')";
    return;
  }
  if(bg === 'bg2'){
    document.querySelector('main').style.backgroundImage  = "url('assets/img/bg1.jpg')";
    return;
  }
  document.querySelector('main').style.backgroundImage  = "url('assets/img/bg2.jpg')";
}
function setLevel(level){
  if(level === "easy"){
    document.querySelector('.container').setAttribute("style", "grid-template-rows:repeat(3, 1fr)");
    numberOfCards = 18;
    ids.push(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9);
    return;
  }
  if(level === "hard"){
    document.querySelector('.container').setAttribute("style", "grid-template-rows:repeat(5, 1fr)");
    numberOfCards = 30;
    ids.push(1,2,3,4,5,6,7,8,9,10,11,12,13,14, 15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    return;
  }
  document.querySelector('.container').setAttribute("style", "grid-template-rows:repeat(4, 1fr)");
  numberOfCards = 24;
  ids.push(1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12);
}

/* table */
function createTable(tableData) {
  var tableFame = document.querySelector('.tableFame');
  var tBody = document.querySelector('tbody');
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    for(prop of ["time", "attempts", "date"]){
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData[prop]));
      row.appendChild(cell);
    }

    tBody.appendChild(row);
  });

  tableFame.appendChild(tBody);
}
