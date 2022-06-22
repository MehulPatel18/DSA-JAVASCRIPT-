
// Find lost element from a duplicated array
/* 
     Input:  arr1[] = {1, 4, 5, 7, 9}
          arr2[] = {4, 5, 7, 9}
     Output: 1
     1 is missing from second array.
*/


// function findMissing (arr1, arr2, len1, len2) {
//      if (len2 == len1 - 1)
//           return findMissingUntill(arr1, arr2, len1);
//      else if (len1 == len2 - 1)
//           return findMissingUntill(arr1, arr2, len2);
//      else
//           return "Invliad Input";
// }

// function findMissingUntill (arr1, arr2, len) {
//      if (len == 1)
//           return arr1[0];
//      if (arr1[0] != arr2[0])
//           return arr1[0];
//      let [low, high] = [0, len-1];
     
//      while (low < high) {
//           let mid = (low + high) / 2;
//           if (arr1[mid] == arr2[mid])
//                low = mid;
//           else
//                high = mid;
//           if (low == high - 1)
//                break;
//      }
//      return arr1[high];
// }

function findMissing (arr1, arr2, len1, len2) {
     let res = 0;
     for (let i = 0; i < len1; i++) {
          res = res ^ arr1[i];
     }
     for (let i = 0; i < len2; i++) {
          res = res ^ arr2[i];
     }
     return res;
}

let arr1 = [2, 3, 4, 5];
let arr2 = [2, 3, 4, 5, 6];

console.log(findMissing(arr1, arr2, arr1.length, arr2.length));

// node find_lost_element.js