
function lagestElem(arr) {
    var largest = 0;
    var length = arr.length;
    for (var i = 0; i <= length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

var arr = [];
var makeArr = async () => {
    for (let index = 0; index < 10000000; index++) {
        arr.push(Math.floor(Math.random() * 10000000));
    }
    return arr;
}
makeArr().then((arr) => {+
    console.log(arr);
    console.log(lagestElem(arr));
});

// console.log(lagestElem(arr));

