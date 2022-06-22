const mergeSort = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            sortedArr.push(left.shift());
        else
            sortedArr.push(right.shift());
    }
    return sortedArr.concat(left.slice().concat(right.slice()));
}

//array split function with sorting
const splitArr = arr => {
    // console.log("array " + arr);
    console.log("--------------------------------------------------------------------------");
    if (arr.length <= 1) {
        console.log("return arr:> ", arr);
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    console.log("Mid :> ", mid);
    let left = splitArr(arr.slice(0, mid));
    console.log("left :>", left );
    let right = splitArr(arr.slice(mid));
    console.log("Right :>", right);
    console.log("--------------------------------------------------------------------------");
    return mergeSort(left, right);
    // console.log("Main Response:> ", mergeSort(left, right));
}

// var arr = [];
// var makeArr = async () => {
//     for (let index = 0; index < 10; index++) {
//         arr.push(Math.floor(Math.random() * 100000));
//     }
//     return arr;
// }
// makeArr().then((arr) => {
//     console.log("done");
//     console.log(splitArr(arr));
// });
console.log("sorted array:> ", splitArr([10, 5, 4, 9, 3, 2, 6, 7, 1, 8]));

