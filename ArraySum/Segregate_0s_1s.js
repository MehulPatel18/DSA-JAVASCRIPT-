// Segregate 0s and 1s in an array
/*
     You are given an array of 0s and 1s in random order. Segregate 0s on left side and 1s on right side of the array [Basically you have to sort the array]. Traverse array only once. 

     Input array   =  [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
     Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1] 
*/

function segregate0sAnd1s (arr, len) {
     let left = 0;
     let right = len - 1;

     while (left < right) {
          
          while (arr[left] == 0 && left < right)
               left++;
          
          while (arr[right] == 1 && left < right)
               right--;

          if (left < right) {
               arr[left] = 0;
               arr[right] = 1;
               left++;
               right--;
          }
     }
     return arr;
}

let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
console.log(segregate0sAnd1s(arr, arr.length));
// node Segregate_0s_1s.js