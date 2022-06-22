const Doubly = require('./Doubly'); 
let node = new Doubly();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);

console.log(node);

function reverseDoubly (n) {
     let [pointForward, pointBackward, prev, forw] = [n.head, n.tail, null, null];
     n.head = n.tail;
     n.tail = pointForward;
     while (prev != forw) {
          [prev, forw] = [pointForward, pointBackward];
          [pointForward, pointBackward] = [pointForward.next, pointBackward.prev];
          let [prevFor, prevPrev] = [prev.next, prev.prev];
          prev.next = forw.next;
          prev.prev = forw.prev;
          forw.next = prevFor;
          forw.prev = prevPrev;
          ////////////////////////////////////////////
          pointBackward = pointBackward.prev;
          pointForward = pointForward.next; 
     }
     // console.log("response:", n);
     let temp = n.head.next;
     n.head.next = n.head.prev;
     n.head.prev = temp;
     return n;
}
let res = reverseDoubly(node);
// node.printList(res);
// console.log("Revserse List:", res);
// function printList (node) {
//      let cur = node.head;
//      let str = '';
//      while (cur != node.tail) {
//           console.log(cur.value);
//           str += cur.value + ' -> ';
//           cur = cur.next;
//      }
//      console.log(str);
// }

// printList(res);

// node reverse_doubly_list.js