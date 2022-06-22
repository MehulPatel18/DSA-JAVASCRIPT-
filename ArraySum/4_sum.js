// 4SUM | GOOGLE | AMAZON

function fourSum (arr, len, target) {
     let pair = [];
     arr = arr.sort(function(a, b){return a - b});
     console.log("after sort array:>>> ", arr);

     for (let i = 0; i < len; i++) {
          for (let j = i+1; j < len; j++) {
               let [start, end, point] = [j+1, len-1, target - (arr[i] + arr[j])];
               console.log("main end:> ", end);
               while (start < end) {
                    let p1 = arr[start] + arr[end];
                    console.log();
                    console.log("point: ", point, " > ", "p1: ", p1);
                    // console.log("p1: ", p2);
                    if (point > p1)
                         start++;
                    else if (point < p1)
                         end--;
                    else {
                         console.log("p2:>>> ", p1);
                         console.log("check:>>> ", arr[start] ,  arr[end], end);
                         let temp = [];
                         temp.push(arr[i]);
                         temp.push(arr[j]);
                         temp.push(arr[start]);
                         temp.push(arr[end]);
                         pair.push(temp);

                         while (start < end && arr[start] == temp[2])
                              start++;

                         while (start < end && arr[end] == temp[3])
                              end--;
                    }
               }
               while (j+1 < len && arr[j] == arr[j+1])
                    j++;
          }
          while (i+1 < len && arr[i] == arr[i+1])
               i++;
     }
     return pair;
}

let arr = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1, 1];
console.log(fourSum(arr, arr.length, 9));