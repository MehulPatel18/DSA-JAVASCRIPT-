// Longest Substring Without Repeating Characters | Amazon


function findLongestSubStringWithoutRepeating (arr, len) {
     let [maxLen, map, left, right] = [0, new Map(), 0, 0];
     while (left <= right && right < len) {
          console.log("arr["+right+"]:> " , arr[right]);
          console.log("before Map:>>> ", map);
          if (map.has(arr[right])) {
               let check = map.get(arr[right]);
               if (check > left)
                    left = map.get(arr[right]) + 1;
               map.set(arr[right], right);
               console.log("check:>>> ", check, " || left:>>> ", left);
          } else {
               map.set(arr[right], right);
               maxLen = Math.max(maxLen, (right - left) + 1);
          }
          console.log("maxLen:>>> ", maxLen);
          console.log("after Map:>>> ", map);
          right++;
     }
     return maxLen; 
}

let str = "abcaabcdba";
console.log(findLongestSubStringWithoutRepeating(str, str.length));
// node long_sub_string_without_repeating.js