// Count distinct pairs with given sum

// Find all non duplicate pairs that sum to S

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 5;
let countPair = 0;

function findPairs (arr, k) {
     let si =  0;
     let ei = arr.length - 1;

     while (si < ei) {
          console.log("si", si, "ei", ei);
          if ((arr[si] + arr[ei]) == k) {
               countPair++;
               console.log(`${arr[si]} + ${arr[ei]} = ${arr[si] + arr[ei]}`);
               si++;
               ei++;
          } 
          else if ((arr[si] + arr[ei]) < k)
               si++;
          else
               ei++;
     }
     console.log(countPair);
}

findPairs(arr, k);