const sorting = require('../SortingAlgorith/redixSort');
const Binary = require('../BinarySearch/binary_search');

function twoSum(arr, target) {
   arr = sorting.redixSort(arr);
   let n = arr.length;
   let i = 0;
   let j = n - 1;
   let result = [];

   while (i < n) {
       if (arr[i] + arr[j] == target){
           result.push(i);
           result.push(j);
           return result;
       }
       if (arr[i] + arr[j] < target) {
            i++;
       }else{
           j--;
       }
   }
}
let arr = [3, 2, 6, 4];
let target = 9;
let result = twoSum(arr, target);
console.log(result);