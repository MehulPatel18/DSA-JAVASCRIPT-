

// function selectionSort(arr,arrlen) {

//     for (let i = 0; i < arrlen; i++) {
//         let min = i;
//         for (let j = i + 1; j < arrlen; j++) {

//             if (arr[j] < arr[min]) {
//                 min = j;
//             }

//         }

//         if (i !== min) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }

//     }
//     return arr;

// }

// let arr = [3,5,1,8,2,6,7,4];
// let arrlen = arr.length;
// console.log(selectionSort(arr,arrlen));

let arr = [3,5,1,8,2,6,7,4];
let sort = [];
// for (let i = 0; i < arr.length; i++) {
//     sort.push(arr.shift());
// }

arr.forEach(element => {
    sort.push(arr.pop(element));
});

console.log(sort);