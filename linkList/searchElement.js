const SigleLinkedList = require('./single'); 
// import makenode from './single';

const node = new SigleLinkedList();
node.push(10);
node.push(11);
node.push(12);
node.push(13);
node.push(14);
console.log(node.push(15));


// function searchElement (value) { // through Iterative
//      let current = node.head;
//      while (current.next) {
//           if (current.value == value)
//                return `${value} Hacked!!!`;
//           current = current.next;
//      }
//      return "Not hacked!";
// }

function searchElement (list, value) { // through recursive
     if (list.value == value)
          return `${value} Hacked!!!`;
     if(!list.next)
          return `${value} Not hacked!`;
     return searchElement (list.next, value);
}

console.log(searchElement(node.head, 10));
// node searchElement.js