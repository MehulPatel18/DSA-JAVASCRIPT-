// Delete N nodes after M nodes of a linked list
const SigleLinkedList = require('./single');
const node = new SigleLinkedList();

node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
node.push(6);
node.push(7);
node.push(8);
node.push(9);
console.log(node.push(10));

function deleteNnodeAfterMnode (m, n) {
   let current = node.head;
   let t, count;

   while (current != null) {

     for (count = 1; count < m && current != null; count++)
          current = current.next;
     
     if (current == null)
          return;
     
     t = current.next;
     for (count = 1; count <= n && t != null; count++) {
          let temp = t;
          t = t.next;
     }
     current.next = t;
     current = t;
   }
}

function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

console.log("===========before delete node=====================");
console.log(traverse());
console.log(deleteNnodeAfterMnode(2, 3));
console.log("===========after delete node======================");
console.log(traverse());

// node deleteNnodes_Mnodes.js