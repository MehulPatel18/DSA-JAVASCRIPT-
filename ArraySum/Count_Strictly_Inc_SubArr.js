// Count Strictly Increasing Subarrays
/* 
     Input: arr[] = {1, 4, 3}
     Output: 1
     There is only one subarray {1, 4}

     Input: arr[] = {1, 2, 3, 4}
     Output: 6
     There are 6 subarrays {1, 2}, {1, 2, 3}, {1, 2, 3, 4}
                         {2, 3}, {2, 3, 4} and {3, 4}

*/


// function countStrictlyIncSubArr (arr, len) {
//      let count = 0;
//      for (let i = 0; i < len; i++) {
//           for (let j = i + 1; j < len; j++) {
//                if (arr[j] > arr[j - 1])
//                     count++;
//                else
//                     break;
//           }
//      }
//      return count;
// }

function countStrictlyIncSubArr (arr, len) {
     let count = 0;
     let newlen = 1;

     for (let index = 0; index < len - 1; index++) {
          if (arr[index + 1] > arr[index]) 
               newlen++;
          else {
               count += (((newlen - 1) * newlen) / 2);
               newlen = 1;
          }          
     }

     if (newlen > 1)
          count += (((newlen - 1) * newlen) / 2);

     return count;
}

let arr = [1, 2, 3, 4];
console.log(countStrictlyIncSubArr(arr, arr.length));

// node Count_Strictly_Inc_SubArr.js