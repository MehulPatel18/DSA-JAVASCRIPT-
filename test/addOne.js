//addOne.js
//Add 1 to a number

const SigleLinkedList = require('./single');

let num = "1999";
let len = num.length;
let node = new SigleLinkedList();

for (let i = 0; i < len; i++) {
    node.push(parseInt(num[i]));
}

// console.log(node);

// console.log(reverse(node));
function reverse (node) {
    let next = null;
    let prev = null;
    let current = node.head;
    // traverse();
    
    while (current != null) {
        
        next = current.next;
        current.next = prev;
        prev = current
        current = next;
    }
    // return next;
    console.log(prev);
}


// function traverse () {
//     let current = node.head;
//     while(current) {
//         console.log(current.next);
//         current = current.next;
//     }
// }

reverse(node);
// traverse();