const SigleLinkedList = require('./single');
const node = new SigleLinkedList();


node.push(10);
node.push(22);
node.push(30);
node.push(43);
node.push(56);
node.push(70);

function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

traverse();

function rearrangeOddEven (node) {
     let odd = node.head;
     let even = node.head.next;
     let prev = null;

     while (odd != null) {
          let t = odd.next;
          if(t == null)
               break;
          console.log("t >>> ", t.next);
          odd.next = t.next;
          odd = t.next;
          prev = t;
     }

     while (even != null) {
          let t = even.next;
          if(t == null)
               break;
          even.next = t.next;
          even = t.next;
          
     }

     prev.next = even;
}

rearrangeOddEven(node);

traverse();
//  node rearrange_odd_even.js