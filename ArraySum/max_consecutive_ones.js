//Max Consecutive Ones | Leetcode

function maxConsecutive (arr, len) {
     let [current, max, i] = [0, 0, 0];
     while (i < len) {
          if(arr[i] == 1) {
               current++;
               max = Math.max(current, max);
          } else
               current = 0;
          i++;
     }
     return max;
}

let arr = [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1];
console.log(maxConsecutive(arr, arr.length));
// node max_consecutive_ones.js