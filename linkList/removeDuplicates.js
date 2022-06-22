// Remove duplicates from a sorted linked list
const SigleLinkedList = require('./single');
const node = new SigleLinkedList();

// sorted linked list
node.push(11);
node.push(11);
node.push(11);
node.push(21);
node.push(43);
node.push(43);
node.push(60);

function removeDuplicates (n) {
     let current = n.head;
     while (current.next != null) {
          let temp = current;
          while (temp.next != null && temp.value == current.value) {
               temp = temp.next;
          }
          current.next = temp;
          current = temp;
     }
}


// unsorted linked list

// node.push(10);
// node.push(12);
// node.push(11);
// node.push(11);
// node.push(12);
// node.push(11);
// node.push(10);


// function removeDuplicates (n) {
//      let hasList = new Set();
//      let current = n.head;
//      let temp = null;
//      while (current.next) {
//           if(hasList.has(current.value)) {
//              temp.next = current.next;
//           } else {
//                hasList.add(current.value);
//                temp = current;
//           }
//           current = current.next;
//      }
// }


//====================================================================//
function traverse () {
     let current = node.head;
     while(current) {
         console.log(current.value);
         current = current.next;
     }
}

console.log("Main linkedList:>>>");
traverse();
removeDuplicates(node);
console.log("after removing dulicates:>>>");
traverse();



// node removeDuplicates.js