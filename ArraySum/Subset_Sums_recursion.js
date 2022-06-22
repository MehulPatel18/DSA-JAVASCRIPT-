// Subset Sums | Recursion

function subSet (arr, n,pick, sum = 0) {
     if(pick >= n) {
          res.push(sum)
          return console.log("subset sum:>>> ", sum);
     }
     let tsum = sum + arr[pick];
     console.log("pick:>", pick);
     console.log("sum:>", sum);
     console.log("arr:>", arr);
     subSet(arr, n, pick +=1, tsum); // Pick Element
     subSet(arr, n, pick +=1, sum); // Not Pick Element
}

let arr = [3, 1, 2];
let res = [];
subSet(arr, 3, 0);
console.log("subset:> ", res);

// node Subset_Sums_recursion.js