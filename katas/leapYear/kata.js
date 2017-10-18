leapYear(2100);
leapYear(2002);
leapYear(2005);
leapYear(1979);
leapYear(1981);
leapYear(2004);
leapYear(204);
leapYear(0);



function leapYear(year){
  if(year === 0){
    console.log("Ohhh you should know year zero doesn't exist!");
    return;
  }
  if(divisibleFourHundred(year)){
    console.log("Leap Year: " + year);
    return;
  }

  if(divisibleFour(year) && !divisibleOneHundred(year)){
    console.log("Leap Year: " + year);
    return;
  }
  console.log("Not Leap Year: " + year);
}

function divisible(year, divisor){
  if(year % divisor === 0){
    return true;
  }
  return false;
}

function divisibleFour(year){
  return divisible(year, 4);
}

function divisibleOneHundred(year){
  return divisible(year, 100);
}

function divisibleFourHundred(year){
  return divisible(year, 400);
}
