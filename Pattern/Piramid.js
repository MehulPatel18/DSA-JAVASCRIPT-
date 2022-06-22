len = 10;

// for (var i = 0; i < len; i++) {
//      let space = '';
//      for (let j = len; j > i; j--) {
//           space += ' ';
//      }
    
//      let star = '';
//      for (let k = 0; k < i + 1; k++) {
//           star += '* ';
//      }
//      console.log(space + star);
// }

for (let i = 0; i < len; i++) {
     let space = '';
     let start = '';
     for(let j = len; j > 0; j--) {
          if (j > i)
               space += ' ';
          else
               start += '*';
     }
     console.log(space + start);
}