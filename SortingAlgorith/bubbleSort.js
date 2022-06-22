function bubbleSort (arr,arrlen) {
    let isSwapped;
    for (let i = arrlen; i > 0; i--) {
        isSwapped = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]];
                isSwapped = true;
            }
        }
        if(!isSwapped) {
            break;
        }
    }
    return arr;
}


let arr = [3,5,1,8,2,6,7,4];
let arrlen = arr.length;
console.log(bubbleSort(arr,arrlen));