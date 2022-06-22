//pairStar.js

function pairStar(arr,arrlen) {

    let modifiedArr = "";
    for (let i = 0; i < arrlen; i++) {
        modifiedArr += arr[i];
        if (arr[i] == arr[i + 1]) {
            modifiedArr += "*";
        }
    }
    console.log(modifiedArr);
}

let arr = "aaaa";
let arrlen = arr.length;
pairStar(arr,arrlen);