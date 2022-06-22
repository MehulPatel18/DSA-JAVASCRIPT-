// https://leetcode.com/problems/happy-number/
var isHappy = function(n) {
     let visitedNumber = new Set();
     while (1) {
         let num = 0;
         while (n) {
             let val = n % 10;
             num += val * val;
             n = Math.floor(n / 10);
             console.log("val:", val, " || num:", num, " || n:", n);
         }
         if (num == 1)
             return true;
         else if (visitedNumber.has(num))
             return false;
         
         visitedNumber.add(num);
         n = num;
     }
     return false;
 };
 
 console.log(isHappy(16));

var a = 5, b = 1;
var obj = {a : 10};
with(obj) {
     console.log(b);
}