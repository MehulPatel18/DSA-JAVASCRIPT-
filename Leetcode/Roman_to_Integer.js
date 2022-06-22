// let symbole = {
//     'I' : 1,
//     'V' : 5,
//     'X' : 10,
//     'L' : 50,
//     'C' : 100,
//     'D' : 500,
//     'M' : 1000
// };

// var romanToInt = function(s) {
//     let len = s.length;
//     let i = 0;
//     let digit = 0;

//     while (i < len) {
//         if ( (s[i] + s[i+1]) == 'IV' ) digit += (symbole['V'] - symbole['I']), i += 2; 
//         else if ( (s[i] + s[i+1]) == 'IX' ) digit += (symbole['X'] - symbole['I']), i += 2;
//         else if ( (s[i] + s[i+1]) == 'XL' ) digit += (symbole['L'] - symbole['X']), i += 2;
//         else if ( (s[i] + s[i+1]) == 'XC' ) digit += (symbole['C'] - symbole['X']), i += 2;
//         else if ( (s[i] + s[i+1]) == 'CD' ) digit += (symbole['D'] - symbole['C']), i += 2;
//         else if ( (s[i] + s[i+1]) == 'CM' ) digit += (symbole['M'] - symbole['C']), i += 2;
//         else digit += symbole[s[i]], i++;
//     }
//     return digit;
// };

const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};

console.log(romanToInt('MCMXCIV'));