//misstingRepeating.js


function repeating(arr,len) {

    let [sumN,sumN2,sumA,sumA2,x,y,sumOfxy,missingValue,repeatingValue] = [0,0,0,0,0,0,0,0,0];

    for (let i = 1; i <= len; i++) {
            let sqr = (i*i);
            sumN += i;
            sumN2 += sqr;
            sumA += arr[i - 1];
            sumA2 += arr[i - 1] * arr[i - 1];
    }

    x = sumN - sumA;
    y = sumN2 - sumA2;

    sumOfxy = x + y;

    missingValue = sumOfxy / 2;
    repeatingValue = y - missingValue;

    console.log("Missing element:> ", missingValue);
    console.log("repeating element:> ", repeatingValue);

}

let arr = [1, 2, 3, 4, 4, 6];
// let arr = [1, 2, 2, 4];
let len = arr.length;
repeating(arr,len);



// node misstingRepeating.js