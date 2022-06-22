function findMissingNumber (arr, len) {
     let total = (len + 1) * (len + 2) / 2;
     console.log(total);
     let i = 0;
     while (i < len) {
          total -= arr[i];
          i++;
     }
     return total;
}

let arr = [1, 2, 3, 5, 6, 7, 8];
console.log(findMissingNumber(arr, arr.length));