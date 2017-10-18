var harryBooks = {
  first: 4,
  second: 2,
  third: 0,
  fourth: 1,
  fifth:5
}

var DISCOUNT={
  1: 0,
  2: 5,
  3: 10,
  4: 20,
  5: 25
}
var UNIT = 8;

console.log(booksCounter(harryBooks));

function booksCounter(books) {
  var counter = 0;
  for(var book in books){
    if (books[book] >= 1){
      counter++;
      books[book]--;
    }
  }
  if(counter === 0){
    return 0;
  }

  var price = counter * UNIT;
  var discount = DISCOUNT[counter];
  return price - discount * price / 100 + booksCounter(books);
}
