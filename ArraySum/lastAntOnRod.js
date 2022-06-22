//node lastAntOnRod.js

function lastAntOnRod(arr, arrlen) {

    let positiveAnt = 0;
    let negativeAnt = 0;
    let i = 0;
    
    while(i < arrlen) {
        Math.sign(arr[i] == -1 ? negativeAnt++ : positiveAnt++);
        i++;
    }

    if (positiveAnt > negativeAnt) {
        return negativeAnt + 1;
    }else if (positiveAnt < negativeAnt) {
        return negativeAnt;
    }else if (positiveAnt == positiveAnt) {
        return positiveAnt;
    }

}

let arr = [1, 1, -1, 1, 1, 1, -1, 1];
let arrlen = arr.length;

console.log(lastAntOnRod(arr, arrlen));