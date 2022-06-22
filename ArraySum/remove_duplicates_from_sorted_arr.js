//  Remove Duplicates From Sorted Array

function remove_duplicates_from_sorted_arr (arr, len) {
     let [fast, slow, uniqueLen] = [1, 0, 1];
     while (fast < len) {
          if (arr[slow] != arr[fast]) {
               slow++;
               uniqueLen++;
               let temp = arr[slow];
               arr[slow] = arr[fast];
               arr[fast] = temp;
          }
          fast++;
     }
     console.log("Unique Length:> ", uniqueLen);
     return arr;
}
let arr = [1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 6];
console.log(remove_duplicates_from_sorted_arr(arr, arr.length));

// node remove_duplicates_from_sorted_arr.js