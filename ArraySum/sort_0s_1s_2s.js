// Sort an array of 0's 1's & 2's | Leetcode

/* 
link : https://www.youtube.com/watch?v=oaVa-9wmpns&list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma&index=5&ab_channel=takeUforward

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
output : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]

sloved using Dutch National Flag Algoritham
*/

function sortArr (arr, len) {
     let [low, high, mid] = [0, len-1, 0];
     while (mid <= high) {
          switch (arr[mid]) {
               case 0: {
                    let temp = arr[low];
                    arr[low] = arr[mid];
                    arr[mid] = temp;
                    low++;
                    mid++;
                    break;
               }
               case 1: {
                    mid++;
                    break;
               } 
               case 2: {
                    let temp = arr[mid];
                    arr[mid] = arr[high];
                    arr[high] = temp;
                    high--;
                    break;
               }
          }
     }
     return arr;
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sortArr(arr, arr.length));
//  node sort_0s_1s_2s.js