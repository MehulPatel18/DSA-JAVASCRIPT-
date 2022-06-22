// Rotate a LinkedList | Adobe | Amazon | Microsoft | GS | MMT

const SingleLinkedList = require('./single'); 
const node = new SingleLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);

function rotateLinkedList (n, k) {
     let [p1, slow, fast, count, temp] = [k, n.head, n.head, 1, null]; 
     if (k >= n.length)
          p1 = k % n.length;
     if (p1 == 0)
          return n;
     while (fast != null && count <= p1) {
          fast = fast.next;
          count++;
     }

     while (fast != null) {
          temp = slow;
          fast = fast.next;
          slow = slow.next; 
     }
     console.log("fast:>", fast, " || slow:>", slow.value, " || temp:>", temp.value);
     let prev = n.head;
     n.head = slow;
     temp.next = null;
     let cur = slow;
     while (cur.next != null) {
          cur = cur.next;
     }
     cur.next = prev;
     // console.log("After Rotate List:> ", n.toString());
     console.log("After Rotate List:> ", JSON.stringify(n));

     let p = n.head;
     while (p != null) {
          console.log(p.value);
          p = p.next;
     }
}

rotateLinkedList(node, 12);
// node rotate_linkedlist.js