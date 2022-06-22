// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


// let testCase;

// rl.question("Enter Test Case", function (answer) {
//     testCase  = answer;
//     while (testCase--){
//         let numOfElephant, numOfCandy;
//           rl.question(  "Enter Number Of Elephant", function (numofelp) {
//             numOfElephant = numofelp
//               rl.question(  "Enter Number Of Candys", function (numofcandys) {
//                 numOfCandy = numofcandys;
//                 let arr = [];
//                 let candy_req = 0;
//                 var i = 0;
//                 let can = [1,1]
//                   for (;i < numOfElephant; i++) {

//                     arr[i] = can[i];

//                     candy_req += arr[i];

//                   }
//                   if (numOfElephant === i) {
//                     rl.close();
//                   }
//             });
//         });
//     }
// });


function llep(lestcase) {

  while (lestcase--) {
    let numOfElephant = 2;
    let totalcandy = 3;
    let arr = [1,1];
    let req_candy = 0;

    for (let i = 0; i < numOfElephant; i++) {
      req_candy += arr[i];
    }
    if (req_candy < totalcandy) {
      console.log("Yes");
    }else {
      console.log("No");
    }
  }

}

llep(2);