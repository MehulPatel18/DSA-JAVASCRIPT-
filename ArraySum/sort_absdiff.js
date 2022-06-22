//sort_adsdiff.js
var diff = [];
function test(arr,arrlen,r) {
    
    for (var i = 0; i < arrlen; i++) {
        diff.push(Math.abs(arr[i] - r));
    }
    
    let temp = [];
    for(var i = 0; i < diff.length; i++) {
        let index = binary123(diff);
        diff[index] = null;
        temp.push(arr[index]);
    }
    
    console.log(temp);
}

function binary123 (arr) {
    let max = Number.MAX_VALUE +1 ;
    let index = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == null)
            continue;
        if(max > arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}


let arr = [1,2,3,4,5];
let arrlen = arr.length;
let r = 6;
test(arr,arrlen,r);