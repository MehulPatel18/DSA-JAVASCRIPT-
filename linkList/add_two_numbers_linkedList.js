const SingleLinkedList = require('./single');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const node1 = new SingleLinkedList();
const node2 = new SingleLinkedList();
const final = new SingleLinkedList();
node1.push(2);
node1.push(4);
console.log(node1.push(3));

node2.push(5);
node2.push(6);
node2.push(7);
console.log(node2.push(9));

function addTwoNumbersLinkedList (l1, l2) {
     final.push("dummy");
     let [temp, carry] = [final.head, 0];
     while (l1 || l2 || carry) {
          console.log(`l1 value:>${l1 ? l1.value : 0} || l2 value:>${l2 ? l2.value : 0}  || current value sum:>>> ${(l1 ? l1.value : 0) + (l2 ? l2.value : 0) + carry} || carry:>${carry} || rem:> ${Math.floor(((l1 ? l1.value : 0) + (l2 ? l2.value : 0 )+ carry) / 10)}\n`);
          final.push(Math.floor(((l1 ? l1.value : 0) + (l2 ? l2.value : 0 )+ carry) % 10));
          carry = Math.floor(((l1 ? l1.value : 0) + (l2 ? l2.value : 0) + carry) / 10);
          l1 = l1 ? l1.next : l1;
          l2 = l2 ? l2.next : l2;
     }
     final.head = final.head.next;
     return final;
}




const res = addTwoNumbersLinkedList(node1.head, node2.head);
let n = res.head;
console.log("Sum node:> ");
while (n != null) {
    console.log(n.value);
     n = n.next;
}
// node add_two_numbers_linkedList.js