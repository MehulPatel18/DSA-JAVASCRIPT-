//Rearrange_oddevn.js
const redix = require('../SortingAlgorith/redixSort');

function reArrange_oe(arr,len) {
    arr = redix.redixSort(arr);
    
    let mid = len % 2 == 0 ? Math.floor(arr.length / 2) - 1 : Math.floor(arr.length / 2); 

    let arr1 = arr.slice(0,mid);
    let arr2 = arr.slice(mid+1,len);

    let val = arr[mid]; 
    arr = [];
    arr[0] = val;

    console.log(arr1, arr2);
    while (1) {
        if (arr1.length == 0 || arr2.length == 0) {
            break;
        }
        arr.push(arr2.shift());
        arr.push(arr1.pop());
    }
    while (arr1.length) {
        arr.push(arr1.pop());
    }
    while (arr2.length) {
        arr.push(arr2.pop());
    }
    console.log(arr);
}

let arr = [1,2,3,4,5,6,7];
// let arr = [1, 2, 1, 4 ,5 ,6, 8, 8];
let len = arr.length;
reArrange_oe(arr,len);