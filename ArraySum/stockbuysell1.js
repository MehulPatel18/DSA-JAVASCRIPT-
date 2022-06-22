//stockbuysell1.js  
//Stock Buy & Sell to Maximise Profit | Leetcode - 121 | 

function stockBuySell(arr, arrlen){

    let min = arr[0];
    let maxprofit = 0;

    for(let i = 0; i < arrlen; i++){
        min = Math.min(min, arr[i]);
        let profit = arr[i] - min;
        maxprofit = Math.max(maxprofit, profit);
    }
    return maxprofit;
}

// let arr = [3,5,1,7,4,9,3];
let arr = [7, 1, 5, 3, 6, 4];
let arrlen = arr.length;

console.log(stockBuySell(arr, arrlen));