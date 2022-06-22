// Reversal algorithm for rotation 

const myModule = require('./ReverseArray');

function reversalAlgo (arr, n ,k) {
     arr = myModule.reverseArray(arr, 0, n - k -1);
     arr = myModule.reverseArray(arr, n - k, arr.length - 1);
     arr = myModule.reverseArray(arr);
     return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let response = reversalAlgo(arr, 7, 3);
console.log(response);