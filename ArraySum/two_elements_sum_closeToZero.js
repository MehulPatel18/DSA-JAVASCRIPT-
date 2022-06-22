// Two elements whose sum is closest to zero

function findSumCloseToZero (arr, len) {
     let [closeToZero, curSum, left, right, min_l, min_r] = [Number.MAX_SAFE_INTEGER +1, Number.MAX_SAFE_INTEGER +1, 0, len - 1, 0, 0];
     if(len < 2)
          return "Invliad Input";
     
     arr = arr.sort(sortNumber)

     while (left < right) {
          curSum = arr[left] + arr[right];
          if(Math.abs(curSum) < Math.abs(closeToZero)) {
               closeToZero = curSum;
               min_l = left;
               min_r = right;
          } 
          if(curSum < 0)
               left++;
          else
               right--;
     }

     return `Elements who's sum closest to zero: arr[${min_l}] + arr[${min_r}] = ${closeToZero}`;
}


function sortNumber(a, b) {
     return a - b;
}

let arr = [1, 60, -10, 70, -80, 85];
console.log(findSumCloseToZero(arr, arr.length));
// node two_elements_sum_closeToZero.js


