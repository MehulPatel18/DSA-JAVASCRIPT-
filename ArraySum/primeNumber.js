

function primeNumber(num) {

    for (var i = 2; i < num; i++) {

        if (num%i === 0) {
            console.log(num+" "+ "not prime number");
            return false;
        }

        console.log(num+" "+ "prime number");
        return true;

    }

}

