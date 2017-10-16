/*The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years.
They invented concrete and straight roads and even bikinis [1]. One thing they never discovered
though was the number zero. This made writing and dating extensive histories of their exploits
slightly more challenging, but the system of numbers they came up with is still in use today.
For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters : I, V, X, L, C, D, M. (notice these letters have lots of
straight lines and are hence easy to hack into stone tablets)

Part I

The Kata says you should write a function to convert from normal numbers to Roman Numerals:

     1 --> I
     10 --> X
     7 --> VII
etc.

For a full description of how it works, take a look at [this useful reference website] :
which includes an implementation of the Kata in javascript.

There is no need to be able to convert numbers larger than about 3000.
(The Romans themselves didn’t tend to go any higher)

Part II

Write a function to convert in the other direction, ie numeral to digit*/
var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

var romanNumeralsKata = {

  concatIes: function(number){
    var result = "";

    for(var i=0; i<number; i++){
      result += "I";
    }

    return result;
  },

  concatXs: function(number){
    var result = "";

    for(var i=0; i<number; i++){
      if (number > 10){
        result += "X";
        number = number-10;
      }
      return;
    }

    return result;
  }

  print: function(number){

    var result = "";

    if (number < (V - 1)){
      result = this.concatIes(number);
    } else {
      if (number === (V - 1)){
        result = "IV";
      } else {
        if (number < (X - 1)){
          result = "V" + this.concatIes(number -V);
        } else {
          if (number === (X - 1)){
            result = "IX";
          } else {
            if (number <= (X + 3)){
              result = "X" + this.concatIes(number -X);
            } else {

            //   if (number === (L - 1)){
            //     result = "XLIX";
            //   } else {
            //     if (number < (C - 1)){
            //       result = "L" + this.concatIes(number -L);
            //     } else {
            //       if (number === (C - 1)){
            //         result = "XCIX";
            //       }else {
            //         if (number < (D - 1)){
            //           result = "C" + this.concatIes(number -C);
            //         } else {
            //           if (number === D - 1){
            //             result = "CDXCIX";
            //           } else {
            //             if (number < (M -1)){
            //               result = "D" + this.concatIes(number -D);
            //             } else {
            //               if(number === (M -1)){
            //                 result = "CMXCIX";
            //               }
            //             }
            //           }
            //         }
            //       }
            //     }
               }
            }
          }
        }
      }
    }
    return result;
  }
}
