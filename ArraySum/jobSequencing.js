/* 
Job Sequencing Problem | Greedy Algorithms

     Input: Four Jobs with following 
     deadlines and profits
     JobID  Deadline  Profit
     a      4        20   
     b      1        10
     c      1        40  
     d      1        30
     Output: Following is maximum 
     profit sequence of jobs
          c, a   


     Input:  Five Jobs with following
     deadlines and profits
     JobID   Deadline  Profit
     a       2        100
     b       1        19
     c       2        27
     d       1        25
     e       3        15
     Output: Following is maximum 
     profit sequence of jobs
          c, a, e
*/

function jobSequencing (obj) {
     let [len, maxProfit] = [Object.keys(obj).length, 0];
     let res = makeObjectSorted(obj, len);
     [maxJobTime, obj, flagJob] = [res[0], res[1], new Array(res[0]).fill(-1)];
     // console.log("maxJobTime:> ", maxJobTime);
     // console.log("obj:> ", obj);
     // console.log("flagJob:> ", flagJob);
     for (let i = 1; i <= len; i++) {
          console.log(`obj[${i}][1]:> ${obj[i][1]}  || flagJob[obj[${i}][1] - 1]:> ${flagJob[obj[i][1] - 1]}`);
          if (flagJob[obj[i][1] - 1] == -1) {
               flagJob[obj[i][1] - 1] = obj[i][0];
               maxProfit += obj[i][2];
          } else {
               let p1 = obj[i][1] - 1;
               while (p1 > 0) {
                    console.log("p1:>>> ", p1);
                    if (flagJob[p1 - 1] == -1) {
                         flagJob[p1 -1] = obj[i][0];
                         maxProfit += obj[i][2];
                         break;
                    }
                    p1--;
               }
          }
          console.log("flagJob:> ", flagJob);
     }
     console.log("Max Profit:> ", maxProfit);
     console.log("Final Job Sequence:> ", flagJob);
}

function makeObjectSorted(obj, len) {
     let maxJobTime = Number.MIN_SAFE_INTEGER;
     for (let i = 1; i <= len; i++) {
          maxJobTime = Math.max(maxJobTime, obj[i][1]);
          for (let j = i+1; j <= len; j++) {
               maxJobTime = Math.max(maxJobTime, obj[j][1]);
               if (obj[i][2] < obj[j][2]) {
                    let temp = obj[i]; 
                    obj[i] = obj[j];
                    obj[j] = temp;
               }
          }
     }
     console.log("Sorted Object:>>> ", obj);
     console.log("maxJobTime:> ", maxJobTime);
     return [maxJobTime, obj];
}

let job = {
     1 : [1, 4, 20],
     2 : [2, 5, 60],
     3 : [3, 6, 70],
     4 : [4, 6, 65],
     5 : [5, 4, 25],
     6 : [6, 2, 80],
     7 : [7, 2, 10],
     8 : [8, 2, 22],
}

// let job = {
//      1: [1, 2, 20],
//      2: [2, 1, 10],
//      3: [3, 1, 40],
//      4: [4, 1, 30]
// }

// let job = {
//      1 : [1, 2, 100],
//      2 : [2, 1, 19],
//      3 : [3, 2, 27],
//      4 : [4, 1, 25],
//      5 : [5, 3, 15]
// }

jobSequencing(job);