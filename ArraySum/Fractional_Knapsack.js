// Fractional Knapsack | Greedy Algorithms

function fractionalKnapsack (value, weight, n, maxWeight) {
     let sack = makeObjectSorted(value, weight, n);
     let sackLen = Object.keys(sack).length;
     console.log("Sorted Sack:>", sack);
     console.log("Max Weight:> ", maxWeight);
     let totalStoreValue = 0;
     for (let i = 0; i < sackLen; i++) {
          if(maxWeight > sack[i][0]) {
               console.log("Weight:> ", sack[i][0], " || Value:> ", sack[i][1], " || Remainning Weight:> ", maxWeight);
               totalStoreValue += parseFloat(sack[i][1]);
               maxWeight -= parseFloat(sack[i][0]);
          } else {
               console.log("Weight:> ", sack[i][0], " || Value:> ", sack[i][1], " || Remainning Weight:> ", maxWeight);
               totalStoreValue += parseFloat(sack[i][1]) / parseFloat(sack[i][0]) * maxWeight;  
               break;
          }
     }
     console.log("Total Storage Value:> ", totalStoreValue);
}

function makeObjectSorted (value, weight, n) {
     let sack = {};
     for (let i = 0; i < n; i++) {
          let newLen = Object.keys(sack).length;
          let j = 0,flag = true;
          while (j < newLen) {
               if(sack[j][0] > weight[i]) {
                    let temp = sack[j];
                    sack[j] = [weight[i], value[i]];
                    sack[i] = temp;
                    flag = false;
               }
               j++;
          }
          if(flag)
               sack[i] = [weight[i], value[i]];
     }
     return sack; 
}
let value = [100, 60, 120];
let weight = [20, 10, 30];
let [n , maxWeight] = [3, 50];
fractionalKnapsack(value, weight, n, maxWeight);

//  node Fractional_Knapsack.js