

function fibonacci(n) {

    if (n == 1) {
        return 0;
    }
    if(n == 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n -2);

}

// console.log(fibonacci(9));


// function fibonacci(num) {

//     let n1 = 0, n2 = 1, nextTerm;

//     for(var i = 0; i < num; i++) {
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
   

// }

console.log(fibonacci(7));
