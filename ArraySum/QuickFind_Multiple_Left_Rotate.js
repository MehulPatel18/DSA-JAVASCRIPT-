// Quickly find multiple left rotations of an array
/* 
     Input : arr[] = {1, 3, 5, 7, 9}
          k1 = 1
          k2 = 3
          k3 = 4
          k4 = 6
     Output : 3 5 7 9 1
          7 9 1 3 5
          9 1 3 5 7
          3 5 7 9 1

     Input : arr[] = {1, 3, 5, 7, 9}
          k1 = 14 
     Output : 9 1 3 5 7

     we use a temp array of size 2n and quickly handle rotations.
     Step 1: Copy the entire array two times in temp[0..2n-1] array. 
     Step 2: Starting position of array after k rotations in temp[] will be k % n. We do k 
     Step 3: Print temp[] array from k % n to k % n + n.
*/

// function makeTempArray (arr, n, temp) {
//      arr.forEach((e, i) => {
//           temp[i] = temp[i + n] = e;
//      });
//      return temp;
// }

// function multipleLeftRotate(temp, n, k) {
//      let startAt = k % n;
//      console.log("StartAt:> ",startAt);

//      for (let i = startAt; i < startAt + n; i++) {
//           console.log(temp[i]+"-");
//      }
// }

// let arr = [1, 3, 5, 7, 9];
// let n = arr.length;
// let temp = Array(n * 2).fill(0);
// var tempUpdate = makeTempArray(arr, n, temp);

// let k = 77;
// multipleLeftRotate(temp, n, k);

/* 
Space optimized Approach: The above method takes extra space. Below given is a space-optimized solution.
*/


function multipleLeftRotate (arr, n, k) {
     for (let i = k; i < k + n; i++) {
          console.log(`${i} % ${n} :> `, i % n, "   arr[i % n] :>  ", arr[i % n]);
     }
}

let arr = [1, 3, 5, 7, 9];
n = arr.length;
k = 18;
multipleLeftRotate(arr, n, k);

// node QuickFind_Multiple_Left_Rotate.js