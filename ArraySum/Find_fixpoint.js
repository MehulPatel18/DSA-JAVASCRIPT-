// Find a Fixed Point (Value equal to index) in a given array
/* 
  Input: arr[] = {-10, -5, 0, 3, 7}
  Output: 3  // arr[3] == 3 

  Input: arr[] = {0, 2, 5, 8, 17}
  Output: 0  // arr[0] == 0 


  Input: arr[] = {-10, -5, 3, 4, 7, 9}
  Output: -1  // No Fixed Point
*/

function findFixedPoint(arr, low, high) { // binary search function
     if (high >= low) {
          let mid = Math.floor((high + low) / 2);
          if (mid == arr[mid])
               return mid;
          else if (mid > arr[mid])
               return findFixedPoint(arr, (mid + 1), high);
          else
               return findFixedPoint(arr, low, (mid - 1));
     }
     return -1;
}

// function findFixedPoint(arr, len) {
//      let start = 0;
//      let end = len - 1;

//      while (start < end) {
//           if (start == arr[start])
//                return start;
//           else if (end == arr[end])
//                return end;
//           start++;
//           end--;
//      }
//      return -1;
// }

let arr = [-10, -1, 0, 4, 10, 5, 30, 50, 100];
console.log(findFixedPoint(arr, arr.length));

// node Find_fixpoint.js