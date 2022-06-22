function findSingleElement (arr, low, high) {
     console.log("low:", low, " || high:", high);
     if (low > high)
          return arr[low];
     let mid = Math.floor(low + high / 2);
     console.log("mid:", mid);
     if (mid % 2 != 0) {
          console.log("if");
          if (arr[mid] != arr[mid -1])
               return findSingleElement(arr, low, mid - 1);
     } else {
          console.log("else", "||  arr[",mid, "] :",arr[mid], " || arr[",mid + 1, "] :" , arr[mid + 1]);
          if (arr[mid] != arr[mid +1])
               return findSingleElement(arr, mid + 1, high);
     }
}

let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(findSingleElement(arr, 0, arr.length - 2));