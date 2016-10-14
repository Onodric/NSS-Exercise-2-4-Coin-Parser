

function coinCounter (changeNeeded) {
  var changeLeft = changeNeeded;
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0
  };
  
  coinPurse.quarters = Math.floor(changeLeft / 0.25);
  changeLeft -= coinPurse.quarters * 0.25;

  coinPurse.dimes = Math.floor(changeLeft / 0.10);
  changeLeft -= coinPurse.dimes * 0.10;

  coinPurse.nickles = Math.floor(changeLeft / 0.05);
  changeLeft -= coinPurse.nickles * 0.05;

  coinPurse.pennies = Math.round(changeLeft / 0.01);
  changeLeft -= coinPurse.pennies * 0.01;

  return coinPurse;
};

function printChange(changeNeeded) {
  document.write("Test<br>");
  document.write("Quarters: " + changeNeeded.quarters + "<br>");
  document.write("Dimes: " + changeNeeded.dimes + "<br>");
  document.write("Nickles: " + changeNeeded.nickles + "<br>");
  document.write("Pennies: " + changeNeeded.pennies + "<br>");
};

var test98 = coinCounter(0.98);
var test02 = coinCounter(0.02);
var test73 = coinCounter(0.73);
var test39 = coinCounter(0.39);

printChange(test98);
printChange(test02);
printChange(test73);
printChange(test39);


// var coins = coinCounter(.98);
console.log(test98);