
const myModule = require('../SortingAlgorith/redixSort');

var arr = [];
var sortedArr = [];
var makeArr = async () => {
    for (let index = 0; index < 5000000; index++) {
        arr.push(Math.floor(Math.random() * 5000000));
    }
    return arr;
}
makeArr().then((arr) => {
    console.log("Random Array Ready!");
    sortedArr = myModule.redixSort(arr);
    console.log(sortedArr);
    process(sortedArr);
});


// let sortedArr = myModule.redixSort([ 5, 8, 3, 4, 2, 6, 10, 7, 1, 9 ]);
/*
     [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10] // sorted array
       0  1  2  3  4  5  6   7  8  9

*/
// console.log(sortedArr);

let process = async (sortedArr) => {
     let left = 0;
     let right = sortedArr.length - 1;
     let sum = 3776700;

     while (left <= right) {
          if ((sortedArr[left] + sortedArr[right]) > sum)
               right--;
          else if ((sortedArr[left] + sortedArr[right]) < sum)
               left++;
          else {
               console.log("left:>"+ left+"  value:>"+sortedArr[left] + "    Right:> "+ right+"  value:> "+ sortedArr[right] +"  sum:> "+ (parseInt(sortedArr[left]) + parseInt(sortedArr[right])));
               left++; 
          }
     }
}

// let matchString = 'aaabbcddkklll';
// let match = {};
// for (let i = 0; i < matchString.length; i++) {
//      match[matchString[i]] = match[matchString[i]] == undefined ? 1 : match[matchString[i]] + 1;
// }
// console.log(match);