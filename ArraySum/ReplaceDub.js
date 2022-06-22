//ReplaceDub.js

// function ReplaceDub(str,strlen) {
//     let newStr = '';
//     for (var i = 0; i < strlen; i++){
//         let temp = str[i];
//         let j = i+1;
        
//         newStr += temp;
//         while(j < strlen && temp == str[j]) {
            
//             j++;
//         }
//         if(i+1 != j)
//             newStr += str[j];
//         let s = str[j];
//         str[j] = str[i];
//         str[i] = s;
//     }
// console.log(newStr);

// }

// function ReplaceDub(str,strlen) {
//     let max = 1;
//     let count = 1;
//     for(var i = 0; i < strlen; i++){
        
//         if (str[i] == str[i + 1]) {
//             count++;
//             if (max <= count) {
//                 max++;
//             }
//         }
        
//     }

//     if (max <= strlen - max + 1) {
//         console.log("1");
//     }else {
//         console.log("0");
//     }
//     // console.log(max);
// }

var string = "greekofgreek";
arr = '';

var current = null;
var count = 0
var finaldata = 0;
for (var i = 0; i <= string.length; i++) {
    
    if (string[i] != current) {
        if (count > 0) {
            finaldata = Math.max(count);
        }
        current = string[i];
        count = 1; 
    }else {
        count++;
    }
}

console.log(finaldata);
