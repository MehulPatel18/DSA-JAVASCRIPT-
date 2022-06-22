const SigleLinkedList = require('./single');
const node = new SigleLinkedList();


let number = 1999;
function makeLinkedList (number) {
     let num = number.toString();
     let len = num.length;
     for (let i = 0; i < len; i++) {
          node.push(num[i]);
     }
     // traverse();
}

function reverseLinkList (head) {
     var prev = null;
     var current = head;
     console.log(current);
     var next;
     while (current != null) {
          // console.log("current:> ", current);
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
     }
     // node.head = prev;
     return prev;
}

function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

makeLinkedList(number);
traverse();
reverseLinkList(node.head);
console.log("node:>>>",node);
console.log("=================================================");
console.log( traverse());
// node number_as_linkedlist.js