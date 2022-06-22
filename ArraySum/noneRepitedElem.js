function getUnique(array) {
    var l = array.length,
        i, j,
        unique = [];

    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            if (i === j) {
                continue;
            }
            if (array[i] === array[j]) {
                break;
            }
        }
        if (j === l) {
            unique.push(array[i]);
        }
    }
    return unique;
}

console.log(getUnique([-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3]));