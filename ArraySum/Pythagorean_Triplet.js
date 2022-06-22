// Pythagorean Triplet in an array
/*
     Given an array of integers, write a function that returns true if there is a triplet (a, b, c) that satisfies a2 + b2 = c2.
*/

const redix = require('../SortingAlgorith/redixSort');

function isTriplet (arr, len) {
     for (let i = 0; i < len; i++)
          arr[i] = arr[i] * arr[i];
     
     arr = redix.redixSort(arr);
     for (let i = len - 1; i >= 2; i++) {
          let l = 0;
          let r = i - 1;
          while (l < r) {
               if (arr[l] + arr[r] == arr[i])
                    return true;
               (arr[l] + arr[r] < arr[i]) ? l++ : r--;
          } 
     }
     return false;
}

let arr = [3, 1, 4, 6, 5];
console.log(isTriplet(arr, arr.length));
// node Pythagorean_Triplet.js