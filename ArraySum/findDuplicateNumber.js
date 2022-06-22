// Find the duplicate number | Leetcode 
/*
let arr = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
output = 9
*/

function findDuplicate (arr) {
     let [slow, fast] = [arr[0], arr[0]];
     
     do {
          slow = arr[slow];
          fast = arr[arr[fast]];
     } while (slow != fast);

     fast = arr[0];
     while (slow != fast) {
          slow = arr[slow];
          fast = arr[fast];
     }
     return slow;
}

// let arr = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];
let arr = [5, 7, 2, 3, 1, 8, 6, 4, 5];
console.log(findDuplicate(arr));

// node findDuplicateNumber.js