// Replace every element with the greatest element on right side 

function replaceLargeElementOnEveryRight(arr, len) {
     let max_right = arr[len - 1];
     arr[len - 1] = -1;
     
     for (let i = len - 2; i >= 0; i--) {
          let temp = arr[i];
          arr[i] = max_right;
          if (temp > max_right)
               max_right = temp;
     }
     return arr;
}
let arr = [16, 17, 4, 3, 5, 2];
console.log(replaceLargeElementOnEveryRight(arr, arr.length));

// node Replace_every_large_element_onright.js