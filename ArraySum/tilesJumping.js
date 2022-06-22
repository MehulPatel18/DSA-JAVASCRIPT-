
//

function tiles (arr,len) {
    if (len == 1 && arr[0] == 0) {
        return true;
    }else{
        i = 0;
        while(i < len) {
            if (i <= len-2 && arr[i] == 0) {
                return false;
            }
            i += arr[i];

        }
        return true;
    }
}

let arr = [1,2,0,0,1];
let len = arr.length;
console.log(tiles(arr,len));