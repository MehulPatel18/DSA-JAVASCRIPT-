// Leaders in an array
// Method 1 ( Time Complexity o(n*n) )
// function findLeaders (arr, len) {
//      let leaders = [];
//      for (let i = 0; i < len; i++) {
//           let flag = true;
//           for (let j = i + 1; j < len; j++) {
//                if (arr[i] < arr[j]) {
//                     flag = false;
//                }
//           }
//           if (flag)
//                leaders.push(arr[i]);
//      } 
//      return leaders;
// }

// Method 2 ( Scan from right )
// Time Complexity o(n)
function findLeaders (arr, len) {
     let startFrom = len - 1;
     let max_flag = arr[len - 1];
     let leaders = [];
     while (startFrom >= 0) {
          // console.log("arr["+startFrom+"] :>  "+arr[startFrom], "  maxFlag:>  "+max_flag);
          if (arr[startFrom] > max_flag) {
               leaders.push(max_flag);
               max_flag = arr[startFrom];
          }
          startFrom--;
     }
     leaders.push(max_flag);
     return leaders;
}


// let arr = [16, 17, 4, 3, 5, 2];
let arr = [2, 5];
console.log(findLeaders(arr, arr.length));