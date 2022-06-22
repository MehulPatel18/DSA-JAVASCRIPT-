//romoveX.js

function romoveX(arr,arrlen) {

    for(let i = 0; i < arrlen; i++) {
        if (arr[i] != "x") {
            console.log(arr[i]);
        }
    }
    
}

let arr = "xx";
let arrlen = arr.length;
romoveX(arr,arrlen);