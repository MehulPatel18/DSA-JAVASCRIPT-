// Longest Consecutive Sequence | Leetcode(Hard) | GooGLe

function findlongestConsecutiveSequence (arr, len) {
     let [longSeq, h, i] = [Number.MIN_SAFE_INTEGER, new Set(), 0];
     while (i < len) {
          h.add(arr[i]);
          i++;
     }
     i = 0;
     while (i < len) {
          if(!h.has(arr[i] - 1)) {
               let [count, find] = [1, arr[i]];
               while (1) {
                    find += 1;
                    if(h.has(find))
                         count++;
                    else
                         break;
               }
               longSeq = Math.max(count, longSeq);
          }
          i++;
     }
     return longSeq;
}

// let arr = [102, 4, 100, 1, 101, 3, 2];
let arr = [5, 4, 3, 2, 1];
console.log(findlongestConsecutiveSequence(arr, arr.length));
//  node long_consecutive_sequence.js