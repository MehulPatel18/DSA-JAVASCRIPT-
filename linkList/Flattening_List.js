const SingleLinkedList = require('./single'); 

const node = new SingleLinkedList();

node.push(5);
node.insertBottom(node.head, 5);
node.insertBottom(node.head, 7);
node.insertBottom(node.head, 8);
node.insertBottom(node.head, 30);


node.push(10);
node.insertBottom(node.head, 20);

node.push(19);
node.insertBottom(node.head, 22);
node.insertBottom(node.head, 50);

node.push(28);
node.insertBottom(node.head, 35);
node.insertBottom(node.head, 40);
node.insertBottom(node.head, 45);

// console.log(node);

function flatten (n) {
     if (n == null || n.next == null)
          return n;
     n.next = flatten(n.next);

     n = mergeTwoLists(n, n.next);
     return n;
}

function mergeTwoLists (l1, l2) {

     let temp = new SingleLinkedList();
     temp.push(0);
     let res = temp;
     while (l1 != null && l2 != null) {
          if (l1.value < l2.value) {
               temp.bottom = l1;
               temp = temp.bottom;
               l1 = l1.bottom;
          } else {
               temp.bottom = l2;
               temp = temp.bottom;
               l2 = l2.bottom;
          }
          // console.log("temp:> ", temp);
     }
     if (l1)
          temp.bottom = l1;
     else
          temp.bottom = l2;
     return res.bottom;
}

let flatres = flatten(node.head);
console.log("After flattening List:>", flatres); 
while (flatres != null) {
     console.log(flatres.value);
     flatres = flatres.bottom;
}
// console.log("main node bottom:> ", node.head.value);
// console.log("main node bottom:> ", node.head.bottom.value);
// console.log("main node bottom:> ", node.head.bottom.bottom.value);
// console.log("main node bottom:> ", node.head.bottom.bottom.bottom.value);
// console.log("main node bottom:> ", node.head.bottom.bottom.bottom.bottom.value);
// console.log("================================================");
// console.log("main node bottom:> ", node.head.next.value);
// console.log("main node bottom:> ", node.head.next.bottom.value);

// console.log("main node bottom:> ", node.head.next.next.value);
// console.log("main node bottom:> ", node.head.next.next.bottom.value);

//  node Flattening_List.js