// // Largest Subarray with Zero Sum | Amazon | MMT

function largestSubArrayWith0Sum (arr, len) {
     let [sum, map, max] = [0, new Map(), 0];
     for (let i = 0; i < len; i++) {
          sum += arr[i];
          if(sum == 0)
               max = i + 1;
          else {
               if(map.has(sum)) {
                    max = Math.max(max, i - map.get(sum));
               } else {
                    map.set(sum, i);
               }
          } 
     }
     console.log("map:>>> ", map);
     console.log("type of map:>>> ", typeof(map));
     let itr = map[Symbol.iterator]();
     console.log("itrater:>>> ", itr);
     console.log("type of itrater:>>> ", typeof(itr));
     console.log("done in itrater:>>> ", itr.next().done);
     // console.log("type of itrater next:>>> ", typeof(itr.next()));
     return max;
}
let arr = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];
console.log(largestSubArrayWith0Sum(arr, arr.length));
// node largest_sub_array_with_sum_0.js

// let a = "";
// let b = (a) => {
//      return !!a;
// }
// console.log(b(a));

// function* countAppleSales () {
//      let saleList = [3, 7, 5]
//      for (let i = 0; i < saleList.length; i++) {
//        yield saleList[i]
//      }
//    }
   
//    let appleStore = countAppleSales()  // Generator { }
// console.log(appleStore.next())      // { value: 3, done: false }
// console.log(appleStore.next())      // { value: 7, done: false }
// console.log(appleStore.next())      // { value: 5, done: false }
// console.log(appleStore.next())      // { value: undefined, done: true }