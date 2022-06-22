// Write a program to reverse an array or string
/*  
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}

*/
module.exports = {
     reverseArray : (arr, start = 0, end = arr.length - 1) => {
           if (!arr.length || arr.length <= 1)
                return arr;
           while (start < end) {
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp; 
                start++;
                end--;
           }
           return arr;
     }
}


// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//      if (!arr.length || arr.length <= 1)
//           return arr;
//      while (start < end) {
//           let temp = arr[start];
//           arr[start] = arr[end];
//           arr[end] = temp; 
//           start++;
//           end--;
//      }
//      return arr;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let reverseArr = reverseArray(arr);
// console.log(reverseArr);