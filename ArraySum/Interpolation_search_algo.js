/* 
                    target - arr[low]
     pos = low + ------------------------  * (high - low)
                   arr[high] - arr[low] 
*/

function interpolationSearch(arr, low, high, target) {

     while (low <= high && target >= arr[low] && target <= arr[high]) {
          if (low == high) {
               if (target == arr[low])
                    return low;
               return -1;
          }
          // let pos = low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low]);
          let pos = low + ((target - arr[low]) / (arr[high] - arr[low])) * (high - low);
          if (arr[pos] == target)
			return pos;

		// If x is larger, x is in upper part
		if (arr[pos] < target)
			low = pos + 1;

		// If x is smaller, x is in the lower part
		else
			high = pos - 1;
     }
     return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(interpolationSearch(arr, 0, arr.length - 1, 11));