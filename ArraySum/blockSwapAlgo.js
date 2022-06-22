let leftRotate  = (arr, d, n) => {
     if (d == 0 || d == n)
          return;
     let i =d; // arr A
     let j = n - d;// arr b

     while (i != j) {
          if (i < j) { // A is smaller than B
               arr = swap(arr, d - i, d + j - i, i);
               j -= i;
          } else { // A is grater than B
               arr = swap(arr, d - i, d, j);
               i -= j;
          }
     }
    return swap(arr, d - i, d, i);
}

let swap = (arr, fi, si, d) => {
     for (let i = 0; i < d; i++) {
          let temp = arr[fi + i];
          arr[fi + i] = arr[si + i];
          arr[si + i] = temp;
     }
     return arr;
}

console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 2, 7));

// var arr = [15,10,3,4,5,4,6,7,3,7,9, 9];
// var duplicat = {};
// arr.forEach((e,i) => {
//      duplicat[e] = duplicat[e] == undefined ? 1 : duplicat[e] + 1;
// });

// var dup = [];
// for (const p in duplicat) {
//      if(duplicat[p] > 1)
//           dup.push(p);
// }
// console.log(dup); 