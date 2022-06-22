
function gcd(a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}

module.exports = {
    leftRotate : async (arr, d, n, position) => {
        d = d % n;
        let g_c_d = gcd(d, n);
        for (let i = position; i < g_c_d + position; i++) {
            let temp = arr[i];
            let j = i;
    
            while (1) {
                let k = j + d;
                if (k >= n)
                    k = k - n;
    
                if (k == i)
                    break;
    
                arr[j] = arr[k];
                j = k;
            }
            arr[j] = temp;
        }
        return arr;
    }
}

// function leftRotate(arr, d, n){
//     d = d % n;
//     let g_c_d = gcd(d, n);
//     for (let i = 0; i < g_c_d; i++) {
//         let temp = arr[i];
//         let j = i;
 
//         while (1) {
//             let k = j + d;
//             if (k >= n)
//                 k = k - n;
 
//             if (k == i)
//                 break;
 
//             arr[j] = arr[k];
//             j = k;
//         }
//         arr[j] = temp;
//     }
// }
 

// function printArray(arr, size){
//     for (let i = 0; i < size; i++)
//         console.log(arr[i] +" ");
// }
 

// let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
// let n = arr.length;

// leftRotate(arr, 2, n);
// printArray(arr, n);
