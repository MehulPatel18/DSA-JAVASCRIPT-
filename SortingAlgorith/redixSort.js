// const r = require('redixSort');

function countDigits(number) {
    if (number === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(number))) + 1; 
}

function getDigit(number, index) {
    
    const stringNumber = Math.abs(number).toString();
    const currentIndex = stringNumber.length -1 - index;
    return stringNumber[currentIndex] ? parseInt(stringNumber[currentIndex]) : 0;

}

function maxDigit(arr) {

    let maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        maxNumber = Math.max(maxNumber, countDigits(arr[i]));       
    }
    return maxNumber;

}
module.exports = { 
    redixSort : (arr) => {
        let maxDigitCount = maxDigit(arr);
        for (let i = 0; i < maxDigitCount; i++) {
             let digitBucket = Array.from({length: 10}, () => []);
             for (let j = 0; j < arr.length; j++) {
                 let lastDigit = getDigit(arr[j],i);
                 digitBucket[lastDigit].push(arr[j]);
             }
             arr = [].concat(...digitBucket);
        }
        return arr;
    }
}

// function redixSort(arr) {
//     let maxDigitCount = maxDigit(arr);
//     for (let i = 0; i < maxDigitCount; i++) {
//          let digitBucket = Array.from({length: 10}, () => []);
//          for (let j = 0; j < arr.length; j++) {
//              let lastDigit = getDigit(arr[j],i);
//              digitBucket[lastDigit].push(arr[j]);
//          }
//          arr = [].concat(...digitBucket);
//     }
//     return arr;
// }

// let res = redixSort([1, 121, 1444, 123, 57, 65, 757, 0]);
// var arr = [34,56, 1,3 ,5,76 ,723, 67, 3, 7,9];
// console.log(module.redixSort(arr));
// var makeArr = async () => {
//     for (let index = 0; index < 100000000; index++) {
//         arr.push(Math.floor(Math.random() * 100000000));
//     }
//     return arr;
// }
// makeArr().then((arr) => {
//     console.log("done");
//     let res = redixSort(arr);
//     console.log(res);
// });


