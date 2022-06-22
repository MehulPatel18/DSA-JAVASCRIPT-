

function positiveArr(arr,arrlen) {

    for (var i = 0; i < arrlen; i++) {
        for (var j = 1; j < arrlen; j++) {
            if (Math.sign(arr[i]) == -1) {
                // arr[i + j] = arr[i];
                console.log(arr[i + j]);
            }
        }
    }
    return arr;
}

let arr = [-1,-2,-3,1,2,3];
let arrlen = arr.length;
console.log(positiveArr(arr,arrlen));
//[1,-1,2,-2,3,-3]