// Find the Number Occurring Odd Number of Times
/* 
     Examples : 

     Input : arr = {1, 2, 3, 2, 3, 1, 3}
     Output : 3

     Input : arr = {5, 7, 2, 7, 5, 2, 5}
     Output : 5
*/

// Method 1
// function occurringOddNumbers (arr, len) {
//      let odd = {};
//      for (let i = 0; i < len; i++) {
//           odd[arr[i]] = odd[arr[i]] == undefined ? 1 : parseInt(odd[arr[i]]) + 1;
//      }
//      return odd;
// }

function occurringOddNumbers (arr, len) {
     let res = 0;
     for (let i = 0; i < len; i++) {
          res = res ^ arr[i];
     }
     return res
}

let arr = [1,2,3,4,5,3,4,2,6,8,9,4,3];
console.log(occurringOddNumbers(arr, arr.length));