// Find a peak element
// Given an array of integers. Find a peak element in it. An array element is a peak if it is NOT smaller than its neighbours. For corner elements, we need to consider only one neighbour. 

/*
     Input: array[]= {5, 10, 20, 15}
     Output: 20
     The element 20 has neighbours 10 and 15,
     both of them are less than 20.
*/
/*
     Algorithm: 

         1. If in the array, the first element is greater than the second or the last element is greater than the second last, print the respective element and terminate the program.
         2. Else traverse the array from the second index to the second last index
         3. If for an element array[i], it is greater than both its neighbours, i.e., array[i] > array[i-1] and array[i] > array[i+1], then print that element and terminate.


*/

function findPeakElement (arr, len) {
       
     if (len == 1)
          return arr[0];
     if (arr[0] > arr[1])
          return arr[0];
     if (arr[len -1] > arr[len - 2])
          return arr[len - 1];
     
     for (let i = 1; i < len - 1; i++) {
          if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1])   
               return arr[i];
     }
     return -1;
}

let arr = [5, 10, 20, 15];
console.log(findPeakElement(arr, arr.length));

// node Find_Peak_Element.js