//gridUniquePath.js

function uniquePath(m, n) {

    let N = n + m - 2;
    let r = m -1;
    let result = 1;


    for (let i = 1; i <= r; i++){
        result = result * (N - r + i) / i; 
    }
    return result;

}

let m = 2;
let n = 3;
console.log(uniquePath(m,n));
