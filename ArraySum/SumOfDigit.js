
function calculateSum(N) {
    let sum = 0;
    while(N!=0) {
        let remainder = N%10;
        sum = sum + remainder;
        N = N/10;
    }
    return sum;
}

function calSumMain(T) {
    let sum = 0;
    for (let i = 0; i < T; i++) {
        let N = 5;
        sum += calculateSum(N);
        
    }
    console.log(sum);

}

calSumMain(3);
