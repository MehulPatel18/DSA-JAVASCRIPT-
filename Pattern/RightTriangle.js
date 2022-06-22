/*
RightTriangle.js
Enter = 5; 
*
**
***
****
*****

*/
let len = 5;
for (let i = 0; i <= len; i++) {
     let space = '';
     let star = '';
     for (let j = 0; j <= len; j++) {
          if (j >= i)
               space += ' ';
          else
               star += '*';
     }
     console.log(star + space);
}