// Implement LRU Cache | Leetcode
const doublyImplementation = require('./Doubly');

// function addAfterHead (value, list) { // add recent used node after head
//      if (!list.head)
//           return console.log("List is empty");
     
// }


let node = new doublyImplementation();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
node.push(6);
console.log("main Res:> ");
node.printList();
node.pop();
console.log("After pop Res:>");
node.printList();
node.pushAtHead(6);
console.log("After add at head:> ");
node.printList();
console.log("After pop at head:> ");
node.popAtHead();
node.printList();
console.log("List size:>");
node.size();
// node.pop();
// node.pop();
// node.pop();
// node.pop();
// node.pop();
// node.pop();
node.printList();
// node.size();
console.log("After push at index 3 by value 6:>");
node.pushAtIndex(3, 6);
node.printList();
node.popAtIndex(3); 
console.log("after pop at index 3 by value 6:>");
node.printList();
console.log("List size:>");
node.size();
console.log(node.getSpecificIndex(3));


// console.log(node);

//  node LRU_Cache_dobulyList.js