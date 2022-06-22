// Rearranging positive and negative values in an array

function sepratePosivenegative (arr) {
     let len = arr.length;
     let pivot = -1;

     for (let i = 0; i < len; i++) {
          if (arr[i] < 0) {
               pivot++;
               let temp = arr[i];
               arr[i] = arr[pivot];
               arr[pivot] = temp;
          }
     }
     
     let neg = 0;
     let pos = pivot + 1;
     while (neg < pos) {
          console.log(neg, pos);
          let temp = arr[neg];
          arr[neg] = arr[pos];
          arr[pos] = temp;
          neg += 2;
          pos++;
     }
     return arr;
}

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

console.log(sepratePosivenegative(arr));



// RearrangeArray_POS_NEG.js