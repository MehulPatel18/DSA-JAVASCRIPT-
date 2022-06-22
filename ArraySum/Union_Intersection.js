
const redix = require('../SortingAlgorith/redixSort');

function unionArr (arr1, arr2) {
     arr1 = redix.redixSort(arr1);
     arr2 = redix.redixSort(arr2);

     let arr1Len = arr1.length;
     let arr2Len = arr2.length;
     let unionArr = [];
     let p1 = 0;
     let p2 = 0;
     while (p1 < arr1Len || p2 < arr2Len) {
          if (arr1[p1] > arr2[p2]) {
               unionArr.push(arr2[p2]);
               p2++;
          } else if (arr1[p1] < arr2[p2]) {
               unionArr.push(arr1[p1]);
               p1++;
          } else {
               unionArr.push(arr1[p1]);
               p1++;
               p2++;
          }
     }
     return unionArr;
}

function intersectionArr (arr1, arr2) {
     arr1 = redix.redixSort(arr1);
     arr2 = redix.redixSort(arr2);
     let arr1Len = arr1.length;
     let arr2Len = arr2.length;
     let insertseactionArr = [];
     let p1 = 0;
     let p2 = 0;
     
     while (p1 < arr1Len && p2 < arr2Len) {
          if (arr1[p1] > arr2[p2])
               p2++;
          else if (arr1[p1] < arr2[p2])
               p1++;
          else {
               insertseactionArr.push(arr1[p1]);
               p1++;
               p2++;
          }
     }
     return insertseactionArr;
}

let arr1 = [3,1,4,7,5,10,9];
let arr2 = [2,6,5,3];

console.log(intersectionArr(arr1, arr2));
// unionArr
// intersectionArr

// node Union_Intersection.js
