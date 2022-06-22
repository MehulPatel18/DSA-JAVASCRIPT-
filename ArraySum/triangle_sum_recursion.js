// function findTriangleSum (arr, temp = [], pick = 1) {
//      if (arr.length  <= 1) {
//           return true;
//      }
//      if (pick < arr.length) {
//           temp.push(arr[pick - 1] + arr[pick]);
//           pick += 1; 
//           return findTriangleSum (arr, temp, pick);
//      } else {
//           console.log(temp);
//           return findTriangleSum (temp);
//      }
// }

function findTriangleSum (arr, pick = 1) {
     if (arr.length  <= 1)
          return true;
     if (pick < arr.length) {
          arr[pick - 1] = arr[pick - 1] + arr[pick];
          pick += 1; 
          return findTriangleSum (arr, pick);
     } else {
          arr.pop();
          console.log(arr);
          return findTriangleSum (arr);
     }
}

findTriangleSum([1, 2, 3, 4])
  
//  node triangle_sum_recursion.js