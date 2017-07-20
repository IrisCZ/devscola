// String Calculator Kata (via Roy Osherove)
//
// Create a simple String calculator with a method int Add(string numbers). The method can take 0, 1 or 2 numbers,
// and will return their sum (for an empty string it will return 0). For example "" or "1" or "1,2"
// Start with the simplest test case of an empty string and move to 1 and two numbers
// Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
// Remember to refactor after each passing test
// Allow the Add method to handle an unknown amount of numbers
// Allow the Add method to handle new lines between numbers (instead of commas).
// the following input is ok: "1\n2,3" (will equal 6)
// the following input is NOT ok: "1,\n" (not need to prove it - just clarifying)
// Support different delimiters. To change a delimiter, the beginning of the string will contain a separate line that looks like this:
// [delimiter]\n[numbers...], for example ;\n1;2 should return three where the default delimiter is ; .
// he first line is optional. all existing scenarios should still be supported
// Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
// if there are multiple negatives, show all of them in the exception message

var stringCalculator = {
  DEFAULT_DELIMITER: ",",

  _getDelimiter: function(string){
    var containsDelimiter = isNaN(string[0]) && string[1] === "\n";
    var delimiter = this.DEFAULT_DELIMITER;
    if (containsDelimiter) {
      delimiter = string[0];
    }
    return delimiter;
  },

  _transformToInt: function(stringNumber){
    if (stringNumber === ""){
      return 0;
    }
    return parseInt(stringNumber);
  },

  _splitNumbers: function(string){
    var delimiter = this._getDelimiter(string);
    var numbers = string.replace(/\n/g, delimiter).split(delimiter);
    for(var i = 0; i<numbers.length; i++){
      numbers[i] = this._transformToInt(numbers[i]);
    }
    return numbers;
  },

  _isWrongNumber: function(number){
    return number < 0;
  },

  _findErrorNumbers: function(numbers){
    var errors = [];
    for(var i = 0; i<numbers.length; i++){
      if (this._isWrongNumber(numbers[i])){
        errors.push(numbers[i]);
      }
    }
    return errors;
  },

  add: function(stringNumbers){
    var total = 0;
    var numbers = this._splitNumbers(stringNumbers);
    var errors = this._findErrorNumbers(numbers);

    if (errors.length > 0){
      return "Error. Numbers "+errors.join(" and ")+" not allowed";
    }

    for(var i = 0; i<numbers.length; i++){
      total = total + numbers[i];
    }

    return total;
  }
}
