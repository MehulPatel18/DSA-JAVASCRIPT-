/*
Enter : 5
     *
    **
   ***
  ****
 *****
*/

let len = 5;

for (let i = 0; i < len; i++) {
     let space = '';
     let start = '';
     for(let j = len; j >= 0; j--) {
          if (j > i)
               space += ' ';
          else
               start += '*';
     }
     console.log(space + start);
}