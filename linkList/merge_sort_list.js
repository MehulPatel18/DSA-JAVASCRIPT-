const single = require('./single');
const listMerge = require('./Merge_two_sorted_list');

let node = new single();
node.push(6);
node.push(3);
node.push(1);
node.push(5);
node.push(2);
node.push(4);

function findMid(head) {
     var fast = head;
     var slow = head;
     while(fast.next && fast.next.next) {
          slow = slow.next;
          fast = fast.next.next;
     }
     return slow;
}

function mergeSort(head) {
     if (!head)
          return;
     if (!head.next)
          return head;
     var mid = findMid(head);
     var temp = mid.next;
     mid.next = null;
     var left = mergeSort(head);
     var right = mergeSort(temp);
     return mergeTwoSortedList (left, right);
}

function mergeTwoSortedList (n1, n2) {
     
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

 var mid = mergeSort(node.head);
 node.traverseWithHead(mid);

//  var obj = {
//      name:  "vivek",
//      getName: function(){
//      console.log(this.name);
//    }
//  }
         
//  var newobj = { name: "Mehul"};
//  obj.getName().apply(newobj);

// let arr = [1, (a) => {
//      return function(b){
//        return a + b;
//      }
//    }];
   
//    arr[1](3)(4);

// function randomFunc() {
//      for (let i = 0; i < 6; i++) {
//           setTimeout(()=> console.log(i), i%2 ? 0 : 1000);
//      }
// }
// randomFunc();