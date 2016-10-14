

function coinCounter (changeNeeded) {
  var changeLeft = changeNeeded;
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickles: 0,
    pennies: 0
  };
  
  coinPurse.quarters = Math.floor(changeNeeded / 0.25);
  changeLeft -= parseInt(coinPurse.quarters) * 0.25;

  coinPurse.dimes = Math.floor(changeNeeded / 0.10);
  changeLeft -= parseInt(coinPurse.dimes) * 0.10;

  coinPurse.nickles = Math.floor(changeNeeded / 0.05);
  changeLeft -= parseInt(coinPurse.nickles) * 0.05;

  coinPurse.pennies = changeNeeded / 0.01;
  changeLeft -= parseInt(coinPurse.pennies) * 0.01;

  return coinPurse;
};

// document.write(coinCounter(0.98));
// document.write(coinCounter(0.02));
// document.write(coinCounter(0.73));
// document.write(coinCounter(0.39));
var coins = coinCounter(.98);
// console.log();