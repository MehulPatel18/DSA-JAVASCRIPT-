const single = require('./single');
let node = new single();
node.push(23);
node.push(28);
node.push(28);
node.push(35);
node.push(49);
node.push(49);
node.push(53);
node.push(53);
// console.log(node);

function removeOccurDuplicates (n) {
     let dummy = new single();
     dummy.push(0);
     let res = dummy.head;
     dummy = dummy.head;
     let cur = n;
     while (cur != null && cur.next != null) {
          console.log("cur value:>", cur.value, " || cur.next value:>", cur.next.value);
          if (cur.value == cur.next.value) {
               console.log("if");
               let prev = cur.value;
               console.log("prev:>", prev, "cur:>", cur.value);
               console.log("res", res);
               while (cur != null && prev == cur.value) {
                    console.log("while dummy:", dummy.value);
                    cur = cur.next;
               }
               console.log("cur.value:inner while:", cur);
               if (!cur) {
                    console.log("while if");
                    dummy.next = null;
               }
               else {
                    dummy.next = cur;
                    dummy = dummy.next;
               }
          } else {
               console.log("else cur:", cur.value, " || cur.next:", cur.next.value);
               // console.log("else cur:", cur.value, " || cur.next:", cur.next.value);
               // console.log("c");
               let t = cur.next;
               dummy.next = cur;
               dummy = dummy.next;
               cur = t;
              
          }
          // console.log("after loop:", dummy.value);
          // break;
     }
    return res.next;
}

let res = removeOccurDuplicates(node.head);
console.log(res);

// node remove_occur_duplicate.js