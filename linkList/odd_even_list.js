const SingleLinkedList = require('./single');
const node = new SingleLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
node.push(6);

console.log(node);

function oddEven (n) {
     if (!n || !n.next || !n.next.next)
          return n;
     let [odd, even] = [n, n.next];
     let res = odd;
     let e = even;
     while (even!= null && even.next != null) {
          odd.next = odd.next.next;
          even.next = even.next.next;
          odd = odd.next;
          even = even.next;
     }
     odd.next = e;
     return res;
}
let n = oddEven(node.head);
node.traverseWithHead(n);

//  node odd_even_list.js