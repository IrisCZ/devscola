// Calculate how many times a number can be divided by a given number.


var numberOfDivisions = {

  print: function(number, divisor){
    var counter = 0;
    var result = number;

    while(result >= divisor){
      result = result/divisor;
      counter += 1;
    }

    return counter;
  }
}
