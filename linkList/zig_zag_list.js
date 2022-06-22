const signle = require('./single');
let node = new signle();

node.push(1);
node.push(2);
node.push(3);
node.push(4);
console.log(node);

let zigZag = n => {
     let [zig, zag]= [n.head, n.head.next];
     
     // while (zag != null && zag.next != null) {}
}