// Middle of the Linked List | Amazon | Microsoft

const SigleLinkedList = require('./single'); 

const node = new SigleLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
console.log(node.push(6));

function findMiddleOfLinkList (n) {
     let [slow, fast] = [n, n];
     while (fast != null && fast.next != null) {
          // console.log("slow:>>> ", slow);
          // console.log("fast:>>> ", fast);
          slow = slow.next;
          fast = fast.next.next;
     }
     return slow;
}

console.log("Middle of linked list:> ",findMiddleOfLinkList(node.head));
// node middleOfLinkList.js