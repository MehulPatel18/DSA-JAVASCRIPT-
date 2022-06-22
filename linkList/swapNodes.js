const SigleLinkedList = require('./single');
const node = new SigleLinkedList();

node.push(10);
node.push(15);
node.push(12);
node.push(13);
node.push(20);
node.push(14);

let [x, y] = [12, 20];

function detactNode (n , x, y) {
     console.log("x and y:>", x, y);
     let cur = n;
     // console.log("node:>>> ",n);
     let [a, b] = [null, null];
     let prev1 = n;
     while (cur != null) {
          // console.log("1");
          // console.log("cur:>>>",  cur.value);
          if(cur.value == x || cur.value == y) {
               // console.log("inside1");
               a = prev1;
               break;
          }
          prev1 = cur;
          cur = cur.next;
     }

     prev1 = cur.next;
     cur = cur.next

     while (cur != null) {
          // console.log("cur:>>>",  cur.value);
          if(cur.value == x || cur.value == y) {
               // console.log("inside2");
               b = prev1;
               break;
          }
          // console.log("prev1:>>>", prev1);
          prev1 = cur;
          cur = cur.next;
     }

     let t1, t2, prevloc;
     t1 = a.next.next;
     console.log("t1", t1);
     prevloc = a.next;
     
     console.log("prevLoc:>>>", prevloc);
     console.log("b.next:>>>", b.next);
     // return;
     a.next = b.next;
     a.next.next = t1;

     t2 = b.next.next;
     b.next = prevloc;
     b.next.next = t2;

     // var temp = a.next;
     // a.next = b.next;
     // b.next = temp;


     console.log("a:>>> ", a);
     console.log("b:>>> ", b);
}

function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

console.log("Main linkedList:>>>");
traverse();
detactNode(node.head, x, y);
console.log("after swapping nodes:>>>");
console.log(node);
traverse();

// node swapNodes.js