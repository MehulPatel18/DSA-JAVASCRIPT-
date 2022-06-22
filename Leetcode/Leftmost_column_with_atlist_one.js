

function leftmostColumn (matrix, row, col, res = -1) {
     while (row > -1 && col > -1) {
          if (matrix[row][col] == 0)
               row--;
          else {
               res = col;
               col--;
          }
     }
     return res;
}

let matrix = [
     [0, 0, 0, 0, 1],
     [0, 1, 0, 1, 1],
     [0, 0, 1, 1, 1],
     [0, 0, 0, 1, 1],
     [0, 0, 0, 0, 0],
];
console.log(leftmostColumn(matrix, 4, 4));
