// Find the minimum distance between two numbers

// Method 1
// time complexity o(n2)
// function findMinimumDistancebtwTwoNum (arr, x, y,len) {
//      let min_len = 0;
//      for (let i = 0; i < len; i++) {
//           for (let j = i + 1; j < len; j++) { 
//                if (arr[i] == x && arr[j] == y || arr[i] == y && arr[j] == x && min_len > Math.abs(i-j)) {
//                     min_len = Math.abs(i-j);
//                }
//           }
//      }
//      return min_len;
// }


// Method 2
// time complexity o(n)
function findMinimumDistancebtwTwoNum (arr, x, y, len) {
     let i = 0;
     let prev = undefined;
     let min_len = len;
     for ( ; i < len ; i++) {
          if (arr[i] == x || arr[i] == y) {
               prev = i;
               break;
          }
     }
     
     for ( ; i < len; i++) {
          if (arr[i] == x || arr[i] == y) {
               if (arr[i] != arr[prev] && (i - prev) < min_len) {
                    min_len = i - prev;
                    prev = i;
               } else {
                    prev = i;
               }
          }
     }
     return min_len;
}


let arr = [3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3];
console.log(findMinimumDistancebtwTwoNum(arr, 3, 6, arr.length));