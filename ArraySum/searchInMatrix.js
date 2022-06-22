// Search in 2D-MATRIX | Leetcode | GFG 

function searchElementInMatrix (matrix, element, row, col) {
     console.log("Matrix:>>>", matrix);
     let [i, j] = [0, col - 1];
     while (i < row && j >= 0) {
          if(matrix[i][j] == element)
               return `${element} Hacked!`
          else if (matrix[i][j] > element)
               j--;
          else
               i++;
     }
     return `${element} not Hacked!`;  
}

let matrix = [
     [1, 3, 5, 7],
     [10, 11, 16, 20],
     [23, 30, 34, 50]
];
console.log(searchElementInMatrix(matrix, 12, 3, 3));

// node searchInMatrix.js