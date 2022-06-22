/*
     Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
     Output : 4
     Explanation: The frequency of 4 is 5 which is greater
     than the half of the size of the array size. 
*/


// Method 1
// Time Complexity o(n * n), Auxiliary Space o(1)

// function findMajorityelement (arr, len) {     
//      let majorityElement = [];
//      for (let i = 0; i < len; i++) {
//           let count = 1;
//           if(!majorityElement.includes(arr[i])) {
//                for (let j = i + 1; j < len; j++) {
//                     if (arr[i] == arr[j])
//                          count++;
//                }
//                // console.log(count, Math.floor(len/ 2));
//                if (count > Math.floor(len / 2))
//                     majorityElement.push(arr[i]);
//           }
//      }
//      return majorityElement;
// }

function findMajorityelement(arr,len) { 
     console.log(arr);

     let mejorElemIndex = 0;
     let count = 1;
     for (let i = 1; i < len; i++) {
          
          if (arr[mejorElemIndex] == arr[i]) {
               count++;
          }else {
               count--;
          }

          if (count == 0) {
               mejorElemIndex = i;
               count = 1;
          }

     }

     // return arr[mejorElemIndex];

     let dis = isMejority(arr,len,arr[mejorElemIndex]); 
     if (dis) {
          return "Mejority Element";
     }else {
          return "Not Mejority Element";
     }
     // return arr[mejorElemIndex];

}

function isMejority(arr,len,candi) { 
     let count = 0;

     for (let j = 0; j < len; j++) {
          if (arr[j] == candi) {
               count++;
          }
     }
     if (count > Math.floor(len/2)) {
          return 1;
     }else {
          return 0;
     }
}


let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(findMajorityelement(arr, arr.length));