// Merge Two Sorted Lists | Microsoft | Yahoo | Amazon
const SingleLinkedList = require('./single'); 

const node1 = new SingleLinkedList();
const node2 = new SingleLinkedList();
// node1.push(5);
// node1.push(7);
// console.log(node1.push(9));

// node2.push(3);
// node2.push(4);
// node2.push(8);
// console.log(node2.push(10));

module.exports = {
     mergeTwoSortedList : (n1, n2) => {
          console.log("n1:", n1, " || n2:", n2);
          if (n1 == null)
               return n2;
          if (n2 == null)
               return n1;
          if (n1.value > n2.value) {
               let temp = n1;
               n1 = n2;
               n2 = temp;
          }
          let res = n1;
          while (n1 != null && n2 != null) {
               let temp = null;
               while (n1 != null && n1.value <= n2.value) {
                    temp = n1;
                    n1 = n1.next;
               }
               temp.next = n2;
               // swap
               let t = n1;
               n1 = n2;
               n2 = t;
          }
          return res;
     }
}

function traverse (res) {
     let current = res;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

// let res = mergeTwoSortedList(node1.head, node2.head);
// console.log(res);
// traverse(res);

// =============================== using recursion =========================================//

// function mergeTwoSortLinkedList (n1, n2) {
//      if (n1 == null)
//           return n2;
//      if (n2 == null)
//           return n1;
//      if (n1.value > n2.value) {
//           let temp = n1;
//           n1 = n2;
//           n2 = temp;
//      }
// }



//  node Merge_two_sorted_list.js