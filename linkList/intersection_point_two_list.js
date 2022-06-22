// Intersection point of two Linked Lists

const SingleLinkedList = require('./single'); 
const node1 = new SingleLinkedList();
const node2 = new SingleLinkedList();

node1.push(1);
node1.push(2);
node1.push(8);
node1.push(7);
node1.push(6);
// node1.head.next.next = 
node2.push(2);
node2.push(8);
node2.push(1);
node2.push(3);
node2.head.next.next.next.next = node1.head.next.next;
console.log("list 1:");
node1.traverse();
console.log("list 2:");
node2.traverse();

function findIntersectionpoint (l1, l2) {
     let [p1, p2] = [l1, l2];
     while (p1 != p2) {
          // console.log("--------------------------------------------------------------------------");
          // console.log("p1:>", p1);
          // console.log("p2:>", p2);
          // console.log("--------------------------------------------------------------------------");
          if (p1 == null)
               p1 = l2;
          if (p2 == null)
               p2 = l1;
          p1 = p1.next;
          p2 = p2.next;
     }
     console.log("intersection point:> ", p1);
}

findIntersectionpoint(node1.head, node2.head);
// console.log(node2.head.next.next.next);



// node intersection_point_two_list.js