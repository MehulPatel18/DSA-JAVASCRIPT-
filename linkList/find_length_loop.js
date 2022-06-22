const SigleLinkedList = require('./single');
const node = new SigleLinkedList();

node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);

node.head.next.next.next.next.next = node.head.next;
// console.log(":>>>>>", node.head.next.next.next);

function findLoopNodes (node) {
     let [fast_p, slow_p] = [node.head, node.head];
     while (fast_p && slow_p && fast_p.next) {
          slow_p = slow_p.next;
          fast_p = fast_p.next.next;
          if(slow_p == fast_p) {
               // console.log("slow_p:>>>>", slow_p);
               // console.log("fast_p:>>>>", fast_p);
               return countNodes (slow_p);
          }
     }
     console.log("Loopnode:", 0);
}

function countNodes (n) {
     let temp = n;
     let loopNode = 1;
     while (temp.next != n) {
          loopNode++;
          temp = temp.next;
     }
     console.log("Loopnode:", loopNode);
}

function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

findLoopNodes(node);


//  node find_length_loop.js