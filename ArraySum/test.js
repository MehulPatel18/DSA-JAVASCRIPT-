

function relop(x,total = 0) {
    
    if (x === 1) {
        total = total + x;
        return total;
    }else{
        total = total + x;
        relop(x - 1,total);
    }

}

console.log(relop(3));