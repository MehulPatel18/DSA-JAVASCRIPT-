const SingleLinkedList = require('./single'); 

const node = new SingleLinkedList();
// node.push(10);
// node.push(11);
// node.push(12);
// node.push(13);
// node.push(14);
// console.log(node.push(15));


module.exports = {
     reverseLinkedList : (node) => {
          let newHead = null, next;
          while (node.head != null) {
               next = node.head.next;
               node.head.next = newHead;
               newHead = node.head;
               node.head = next;
          }
          node.head = newHead;
          return node;
     }
}

function traverse () {
     let current = node.head;
     while (current) {
         console.log(current.value);
         current = current.next;
     }
}

console.log("Actual list:>>>");
traverse();
console.log(reverseLinkedList(node));
console.log("reverse list:>>>");
traverse();
// node reverseLinkedList.js