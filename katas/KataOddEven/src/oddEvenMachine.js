var oddEvenMachine = {
  EVEN: 'even',
  ODD: 'odd',
  PRIME: 'prime',
  
  analize: function(number){
    var result = this.ODD;
    if (this.isEven(number)) result = this.EVEN;
    if (this.isPrime(number)) result = this.PRIME;
    return result;
  },

  isEven:function(number){
    return this.divisibleBy(number,2);
  },

  isPrime:function(number){
    var LAST_SEQUENCED_PRIME = 3;
    var result = true;
    for ( var divisor=this.half(number) ;
          divisor>= LAST_SEQUENCED_PRIME;
          divisor--){
      if (this.divisibleBy(number,divisor)) result=false;
    }

    return result;
  },

  half:function(number){
    return Math.trunc(number/2);
  },

  divisibleBy:function(dividend,divisor){
    return ((dividend%divisor)==0);
  }

}
