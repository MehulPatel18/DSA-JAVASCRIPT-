

function singleElement (arr, low, high) {
     while (high >= low) {
          let mid = Math.floor(low + (high - low) / 2);
          console.log(`low:>${low} || High:>${high} || Mid:>${mid}`);
          if (mid % 2 == 0) {
               if (arr[mid] === arr[mid + 1])
                    low = mid + 1;
               else
                    high = mid - 1;
          } else {
               if (arr[mid] === arr[mid - 1])
                    low = mid + 1;
               else
                    high = mid - 1;
          }
     }
     return arr[low];
}

let arr = [1, 1, 2, 2, 3, 4, 4];
console.log(singleElement(arr, 0, arr.length));