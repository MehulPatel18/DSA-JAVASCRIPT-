//pattern_2.js using single loop
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function pattern_2(arr) {
    
    let i,k,flag = 1,space = '',star = '';

    for (i = 1,k = 0; i <= 2 * arr - 1; i++) {
        
        if (i < arr - k) {
            space += " ";
        }else{
            if (flag) {
                star += "*";
            }else{
                space += " ";
            }
            flag = 1-flag;
        }

        if (i === arr+k) {
            k++;
            console.log(star+space);
            if (i == 2 * arr - 1) {
                break;
            }
            i = 0;
            flag = 1;
        }


    }

}

let arr = 5;
pattern_2(arr);