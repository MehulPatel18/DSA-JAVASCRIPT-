// ROTATE IMAGE | Leetcode s

function rotateImage (arr, row, col) {
     console.log("Matrix Array:>>> ", arr);
     return reArrangeRowcol(arr, row, col);
}

function reArrangeRowcol (arr, row, col) {
     for (let i = 0; i < row; i++) {
          for (let j = i; j < col; j++) {
               let temp = arr[i][j];
               console.log("temp:>>>", temp);
               arr[i][j] = arr[j][i];
               arr[j][i] = temp;
          }
     }
     console.log("After make row to column:>>>", arr);
     return reverseArr (arr, row, col);
}

function reverseArr (arr, row, col) {
     for (let i = 0; i < row; i++) {
          let [start, end] = [0, col-1];
          while (start < end) {
               let temp = arr[i][start];
               arr[i][start] = arr[i][end];
               arr[i][end] = temp;
               start++;
               end--;
          }
     }
     return arr;
}

let matrix = [
     [1, 2, 3, 4],
     [5, 6, 7, 8],
     [9, 10, 11, 12],
     [13, 14, 15, 16]
];

console.log("after rotate images", rotateImage(matrix, 4, 4));
//  node rotateImage.js