//stockbuysell2.js
//Stock Buy & Sell to Maximise Profit - 2 | Leetcode - 122 

function stockbuy(arr,arrlen) {
    let profit = 0;
    for (var i = 1; i <= arrlen; i++) {

        if (arr[i] > arr[i - 1]) {
            profit += arr[i] - arr[i - 1];
        }

    }
    return profit;
}

let arr = [5,2,6,1,4,7,3,6];
let arrle = arr.length;
console.log(stockbuy(arr,arrle));