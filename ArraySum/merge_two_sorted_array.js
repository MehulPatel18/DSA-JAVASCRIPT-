// Merge two sorted arrays in O(1) space | GFG 

function mergeTwoSortedArray (arr1, arr2, len1, len2) {
     // console.log(len1, len2);
     let [gap, mainLen] = [len1 + len2, len1 + len2];
     
     do {
          gap = Math.ceil(gap / 2);
          console.log("GAP:>>> ",gap);
          // return;
          let [low, high] = [0, gap];

          while (high < mainLen) {
               console.log(high < len1 ? arr1[high] : arr2[high - len1] , " < ", low < len1 ? arr1[low] : arr2[low - len1]);
               let t1 = high < len1 ? arr1[high] : arr2[high - len1];
               let t2 = low < len1 ? arr1[low] : arr2[low - len1];
               // if(high < len1 ? arr1[high] : arr2[high - len1] < low < len1 ? arr1[low] : arr2[low - len1]) {
               if(t1 < t2) {
                    console.log("if");
                    let temp = high < len1 ? arr1[high] : arr2[high - len1];
                    console.log("temp:>>>", temp);
                    // console.log("before::>>>", high < len1 ? arr1[high] : arr2[high - len1]);
                    high < len1 ? arr1[high] : arr2[high - len1] = low < len1 ? arr1[low] : arr2[low - len1];
                    // console.log("after::>>>", high < len1 ? arr1[high] : arr2[high - len1]);
                    console.log("before:>>> ",low < len1 ? arr1[low] : arr2[low - len1]);
                    let a = low < len1 ? arr1 : arr2;
                    let b = low < len1 ? low : low - len1;
                    // low < len1 ? arr1[low] : arr2[low - len1] = temp;
                    a[b] = temp;
                    console.log("after:>>> ",low < len1 ? arr1[low] : arr2[low - len1]);
                    high++;
                    low++;
                    // break;
               } else {
                    console.log("else");
                    high++;
                    low++;
               }
               // break;
          }
          // break;
     } while (gap > 1);

     console.log("arr1:>>>", arr1);
     console.log("arr2:>>>", arr2);
}

let arr1 = [3, 27, 38, 43];
let arr2 = [9, 10, 82];


// let arr1 = [1,4, 7, 8, 10];
// let arr2 = [2, 3, 9];

mergeTwoSortedArray(arr1, arr2, arr1.length, arr2.length);

// node merge_two_sorted_array.js