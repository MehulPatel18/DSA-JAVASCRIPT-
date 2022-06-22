

function insertionSort(arr,arrlen) {

    for (let i = 1; i < arrlen; i++) {
        let currentVAl = arr[i];
        // console.log("val i " + i);
        // console.log("current val " + currentVAl);
        for (j = i -1; j >= 0 && arr[j] > currentVAl; j--) {
            // console.log("val j " + j);
            // console.log("arr[j] val " + arr[j]);
            // console.log("current val " + currentVAl);
            // console.log("arr[j + 1] Befor " + arr[j + 1]);
            arr[j + 1] = arr[j];
            // console.log("arr[j + 1] after " + arr[j + 1]);
            // console.log("inner arr " + arr);
        }
        // console.log("arr[j + 1] Befor outer" + arr[j + 1]);
        arr[j + 1] = currentVAl;
        // console.log("arr[j + 1] after outer" + arr[j + 1]);
        // console.log("outer arr " + arr);
    }
    return arr;
}

let arr = [3,5,1,8,2,6,7,4];
let arrlen = arr.length;
console.log(insertionSort(arr,arrlen));