var string = "aaabc";
arr = '';

var current = null;
var count = 0
var finaldata = '';
for (var i = 0; i <= string.length; i++) {
    
    if (string[i] != current) {
        if (count > 0) {
            console.log(current +"--->"+count);
            finaldata +=  current+count;
        }
        current = string[i];
        count = 1; 
    }else {
        count++;
    }
}

console.log(finaldata);