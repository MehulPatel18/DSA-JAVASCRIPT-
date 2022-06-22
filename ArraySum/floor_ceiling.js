// Ceiling in a sorted array
/* 
     For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
     For x = 0:    floor doesn't exist in array,  ceil  = 1
     For x = 1:    floor  = 1,  ceil  = 1
     For x = 5:    floor  = 2,  ceil  = 8
     For x = 20:   floor  = 19,  ceil doesn't exist in array
*/

function findCeil (arr, low, high, find) {
     let mid = undefined;
     if (find <= arr[low])
          return low;
     if (x > arr[high])
          return -1;
     mid = (low + high) / 2;

     if (arr[mid] == find)
          return mid;
     else if (arr[mid] < find) {
          if (mid + 1 <= high && find <= arr[mid + 1])
               return mid + 1;
          else
               return findCeil(arr, mid +1, high, find);
     } else {
          if (mid - 1 >= low && find > arr[mid - 1])
               return mid;
          else
               return findCeil(arr, low, mid - 1, find);
     }
}