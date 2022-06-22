let arr = [1,20, 2,10];

function sumArr (arr) {
     let len = arr.length;
     let sum = 0;
     let current = 0;
     let max = null;
     for (let index = 0; index < len; index++) {
          sum += arr[index];
          current += (index * arr[index]);
          console.log("Sum---> " + sum);         
          console.log("Current---> " + current);         
     }
     max = current;
     console.log("Max---> " + max);
     for (let j = 1; j < len; j++) {
          console.log("current---> " + current,"sum---> " + sum,"len---> " + len,"arr["+len+" - "+j+"]---> " + arr[len - j]);
          current = current + sum - len * (arr[len - j]);
          
          console.log("after currif---> " + current + " > " + max);
          if (current > max) {
               max = current;
               console.log("final max---> " + max);
          }
     }
     return max;
}

console.log(sumArr(arr));

// class Solution{
//      rotate(arr,n){
//          return [arr[n-1], ...arr.slice(0, n-2)];
//      }
//  }
 
//  var obj = new Solution();
//  console.log(obj.rotate([1,2,3,4,5,6,7,8,9], 9));