// POW(x,n) | Binary Exponentiation | Leetcode

function getPowerofX (value, pow) {
     let p = pow;
     // console.log("p:>>>", p);

     if (p < 0) p = -1 * p;
     let ans = 1.0; 
     // console.log("p:>>>", p);
     while (p > 0) {
          if(p % 2 == 0) {
               value *= value;
               p /= 2;
          } else {
               ans *= value;
               p -= 1;
          }
          // console.log("value:>>>", value);
          // console.log("ans:>>>", ans);
          // console.log("in loop p:>>>", p);
     }
     if(pow < 0) ans = 1.0 / ans;
     return ans;
}

console.log(getPowerofX(2, 10));
// node power_x_n.js