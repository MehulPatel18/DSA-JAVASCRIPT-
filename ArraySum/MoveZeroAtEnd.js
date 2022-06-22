// Move all zeroes to end of array

/* 
     Input :  arr[] = {1, 2, 0, 4, 3, 0, 5, 0};
     Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

     Input : arr[]  = {1, 2, 0, 0, 0, 3, 6};
     Output : arr[] = {1, 2, 3, 6, 0, 0, 0};
*/
function moveZerosAtEnd(arr) {
     let count = 0;
     let moveArr = [];
     arr.forEach(e => {
          if(e != 0)
               moveArr.push(e);
          else
               count++;
     });
     return [...moveArr, ...Array(count).fill(0)];
}



console.log(moveZerosAtEnd(arr));