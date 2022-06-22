// Minimum Platforms | Greedy Algorithms
const redix = require('../SortingAlgorith/redixSort');

function findMinimumPlatformsRequired (arrival, depature, n) {
     // step 1 : sort both arrival and depature time
          arrival = redix.redixSort(arrival);
          depature = redix.redixSort(depature);
          console.log("after Sorting Arrival:> ", arrival);
          console.log("after Sorting Depature:> ", depature);
     // step 2 : itrate over arrival and depature time by n times
          let [maxPlatform, usedPlatform, arr, dep] = [Number.MIN_SAFE_INTEGER, 0, 0, 0];
          while (arr < n && dep < n) {
               console.log("arrTrain:> ", arrival[arr], " depTrain:> ", depature[dep]);
               // if next arrival train time is less than last train depature time than it required new platfrom
               if(arrival[arr] <= depature[dep]) {
                    usedPlatform++;
                    arr++;
               } else if (arrival[arr] > depature[dep]) {
                    usedPlatform--;
                    dep++;
               }
               maxPlatform = Math.max(usedPlatform, maxPlatform);
               console.log("Current Use Platforms:> ", usedPlatform, " Maximum Platform Required:> ", maxPlatform);   
          }
          return maxPlatform;
}

let arrival = [120, 50, 550, 200, 700, 850];
let depature = [600, 550, 700, 500, 900, 1000];
let n = 6;  
console.log("Total Platforms Required:> ", findMinimumPlatformsRequired(arrival, depature, n));
// node MinimumPlatforms.js 