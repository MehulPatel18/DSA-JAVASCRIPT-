// Minimum Coins | Greedy Algorithms

function findMinimumCoins (coins, value, len) {
     console.log(coins);
     let [coinsNeed, i, usedCoins] = [0, len - 1, []];
     while (i >= 0 && value > 0) {
          console.log("value:> ", value, " || coins:> ", coins[i]);
          if (coins[i] <= value) {
               value -= coins[i];
               usedCoins.push(coins[i]);
               coinsNeed++;
          } else
               i--;
     }
     console.log("Used Coins:> ", usedCoins);
     console.log("No of Minimum Coins Need:> ", coinsNeed);
}

let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
let value = 168;
findMinimumCoins(coins, value, coins.length); 