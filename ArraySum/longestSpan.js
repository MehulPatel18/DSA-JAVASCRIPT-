// //Longest Span with same Sum in two Binary Arrays and

// //Method 1

// function longestSpan(arr1,arr2,arrlen) {
    
//     let maxLen = 0;

//     for (let i = 0; i < arrlen; i++) {
//         let sum1 = 0;
//         let sum2 = 0;
//         for(let j = i; j < arrlen; j++) {

//             sum1 += arr1[j];
//             sum2 += arr2[j];

//             if (sum1 == sum2) {
//                 let len = j-i+1;
//                 if (len > maxLen) {
//                     maxLen = len;
//                 }
//             }
//         }
//     }
//     return maxLen;
// }


//Method 2

function longestSpan(arr1,arr2,arrlen) {

    let maxLen = 0;

    let preSum1 = 0;
    let preSum2 = 0;

    let diff = new Array(2 * arrlen + 1);

    for (let i = 0; i < diff.length; i++) {
        diff[i] = -1;
    }

    for (let i = 0; i < arrlen; i++) {
        preSum1 += arr1[i];
        preSum2 += arr2[i];


        let curr_diff = preSum1 - preSum2;
        let diffIndex = arrlen + curr_diff;


        if (curr_diff == 0) {
            maxLen = i + 1;
        }else if (diff[diffIndex] == -1){
            diff[diffIndex] = i;
        }else {
            let len = i - diff[diffIndex];

            if (len > maxLen) {
                maxLen = len;
            }
        }
    }
    return maxLen;
}


let arr1 = [0, 1, 0, 1, 1, 1, 1];
let arr2 = [1, 1, 1, 1, 1, 0, 1];
let arrlen = arr1.length;

console.log(longestSpan(arr1,arr2,arrlen));
