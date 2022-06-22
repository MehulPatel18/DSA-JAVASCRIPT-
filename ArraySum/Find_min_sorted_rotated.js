// Find the minimum element in a sorted and rotated array

/* 
     Input: {5, 6, 1, 2, 3, 4}
     Output: 1

     Input: {1, 2, 3, 4}
     Output: 1

     Input: {2, 1}
     Output: 1

     * The minimum element is the only element whose previous is greater than it. If there is no previous element, then there is no rotation (the first element is minimum). We check this condition for the middle element by comparing it with (mid-1)’th and (mid+1)’th elements.

     * If the minimum element is not at the middle (neither mid nor mid + 1), then the minimum element lies in either the left half or right half. 
     
          1. If the middle element is smaller than the last element, then the minimum element lies in the left half
          
          2. Else minimum element lies in the right half.
*/

function findMin(arr, start, end) {
     // if()
}

let arr = [5, 6, 1, 2, 3, 4];
let start = 0;
let end = arr.length - 1;
let response = findMin(arr,start, end);
console.log(response);