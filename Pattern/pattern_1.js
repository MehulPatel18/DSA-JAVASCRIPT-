//pattern_1.js
// 0
// 0 1
// 0 2 4
// 0 3 6 9
// 0 4 8 12 16

function pattern_1(arr) {
    let result = '';
    
    for (var i = 0; i < arr; i++) {
        let space = '';
        let star = '';
        let k = 0;
        for(var j = 0; j < 9; j++) {
            
            if (j <= i) {
                star += k;
                k = k+i-1;
            }else{
                space = " ";
            }

        }

        console.log(star + space);
    }
    
}

let arr = 5;
pattern_1(arr);