// node rotateMatrix.js



function rotatematrix(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
     
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break;
   
        prev = mat[row + 1][col];
   
        // Move elements of first row
        // from the remaining rows
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
   
        // Move elements of last column
        // from the remaining columns
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
   
        // Move elements of last row
        // from the remaining rows
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;

        console.log(mat);
    }
 
}
 
// let a = [ [ 1, 2, 3, 4 ],
//           [ 5, 6, 7, 8 ],
//           [ 9, 10, 11, 12 ],
//           [ 13, 14, 15, 16 ] ];

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let R = 3;
let C = 3;
           
rotatematrix(R, C, a);