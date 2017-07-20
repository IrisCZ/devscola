// The FizzBuzz Kata
//
// - Write a program that prints the numbers from 1 to 100. But for multiples of
// three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
//
// Steps:
// Lets divide this into different steps so, we can easily write and test this.
// - Print numbers from 1 to 100
// - Print "Fizz" instead of number which is divisible by 3
// - Print "Buzz" instead of number which is divisible by 5
// - Print "FizzBuzz" instead of number which is divisible by both 3 and 5

var fizzBuzzKata = {

  print: function(){
    var result = [];
    for(var i = 1; i <= 100; i++){
      var fizzBuzz = "";

      if (i % 3 === 0){
        fizzBuzz = "Fizz";
      }
      if (i % 5 === 0){
        fizzBuzz += "Buzz";
      }
      if (fizzBuzz === ""){
        fizzBuzz = i;
      }
      result.push(fizzBuzz);
      console.log(fizzBuzz);
    }
    return result;
  }
}
