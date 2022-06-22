const rotate = require('./Array_Rotation');

// solution 1 with Expected time complexity O(1) and auxiliary space O(n) author Chetan CP

function smalllarge(arr,arrlen) {
    let odd = 1;
    let even = 0;
    let newarr = [];
    for (var i = 0; i < arrlen/2; i++){
        newarr.push(arr[i],arr[arrlen - 1 - i]);
    }
    return newarr;

}

let arr = [1,2,3,4,5,6,7,8,9,10];
let arrlen = arr.length;
console.log(smalllarge(arr,arrlen));



// solution 1 with Expected time complexity O(1) and auxiliary space O(n) author Mehul Patel

// function reArrangeSmallLarge(arr,arrlen) {
//     let odd = 1;
//     let even = 0;
//     let startAt = 1;

//     while (startAt < arrlen) {
//         rotate.leftRotate(arr, 1, arrlen, startAt).then((res) => {
//             console.log(`after ${startAt} ===>  ${res}`);
//             arr = res;
//             startAt += 2;        
//         });
//     }
//     return arr;

// }

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arrlen = arr.length;
// console.log(reArrangeSmallLarge(arr,arrlen));