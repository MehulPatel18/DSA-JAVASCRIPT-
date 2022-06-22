//Rearrange_oddevn.js

const redix = require('../SortingAlgorith/redixSort');

// function reArrange_oe(arr,len) {

//     arr = redix.redixSort(arr);
//     let mid = Math.ceil(arr.length / 2);
    
//     let len1 = mid - 1;
//     let len2 = len - mid;
//     // let left = len1;
//     // let right = mid + 1;
//     let arr1 = arr.slice(0,mid);
//     let arr2 = arr.slice(mid,len);

//     let temp = len1 <= len2 ? len1 : len2;

//     let pushAt = 1;
//     arr[0] = arr[mid];

//     while (1) {
//         if (arr1.length == 0 || arr2.length == 0) {
//             break;
//         }
//         arr[pushAt] = arr2.unshift();
//         pushAt += 1;
//         arr[pushAt] = arr1.pop();
//         pushAt += 1;

//     }

//     while (arr1.length) {
//         arr.push(arr1.pop());
//     }

//     while (arr2.length) {
//         arr.push(arr2.pop());
//     }

//     console.log(arr);

// }


let arr = [1,2,3,4,5,6,7];
let len = arr.length;

reArrange_oe(arr,len);