function fibonaci (arr, len) {
     for (let i = 1; i < len; i++) {
          if (i == 1 && arr[i -1] + 0 != arr[i])
               return false;
          else if (i > 1 && arr[i - 2] + arr[i - 1] != arr[i])
               return false;
     }
     return true;
}

let arr = [1, 1, 2, 3, 5, 8, 13, 21];
console.log(fibonaci(arr, arr.length));