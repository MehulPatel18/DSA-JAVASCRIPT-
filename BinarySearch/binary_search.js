module.exports = {
    binarySearch : (arr,elements) => {
        
    let startingIndex = 0;
    let endingIndex = arr.length - 1;
    let middleIndex = Math.floor((startingIndex + endingIndex) / 2);

    while (arr[middleIndex] !== elements && startingIndex <= endingIndex) {
        if (arr[middleIndex] > elements) { 
             endingIndex = middleIndex - 1;
        } else {
            startingIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((startingIndex + endingIndex) / 2);
    }
    return arr[middleIndex] === elements ? middleIndex : -1;
    }
}

// function binarySearch(arr,elements) {
//     let startingIndex = 0;
//     let endingIndex = arr.length - 1;
//     let middleIndex = Math.floor((startingIndex + endingIndex) / 2);

//     while (arr[middleIndex] !== elements && startingIndex <= endingIndex) {
//         if (arr[middleIndex] > elements) { 
//              endingIndex = middleIndex - 1;
//         } else {
//             startingIndex = middleIndex + 1;
//         }
//         middleIndex = Math.floor((startingIndex + endingIndex) / 2);
//     }
//     return arr[middleIndex] === elements ? middleIndex : -1;
// }

// var arr = [];
// var fatch = async () => { 
//     for (var i = 1; i < 20000000; i++) {
//         arr.push(i);
//     } 
// }

// fatch().then(() => {
//     console.log('done');
//     console.log(binarySearch(arr,17061995));
// });
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12];

