const SingleLinkedList = require('./single'); 

const node = new SingleLinkedList();
node.push(1);
node.push(2);
node.push(3);
node.push(4);
node.push(5);
node.push(6);
node.push(7);
node.push(8);

function reverseLinkListKgroup (nlist, k) {
     let n = nlist;
     let main = null;
     console.log("n list:> ", n);
     console.log("==============================================================================");
     let [cur, end, count] = [n, null, 1];
     while (cur != null) {     
          let count = 1;
          end = cur;
          while (end && count <= 3) {
               end = end.next;
               count++;
          }

          if (count == 4) {
               let [p, temp, prev] = [cur, null, null];
               while (cur != end) {
                    temp = cur;
                    cur = temp.next;
                    temp.next = prev;
                    prev = temp;
                    console.log("temp:> ", temp.value, " || cur:> ", cur.value, " || pre  v:> ", prev.value);
               }
               p.next = temp;
               console.log("p:>", p, " || cur outter:> ", cur);
          }
          // break;
          if (!end)
               break;
     }
     console.log("reverse List by K group:> ", n);
}

reverseLinkListKgroup (node.head, 3);

//  node reverse_node_k_group.js

/* 

 let [count, prev, temp, p1, p2] = [1, null, null, n, n];
          while (count <= 3 && p2) {
               console.log("count:> ", count, " || temp:> ", temp, " || p2:> ", p2);
               temp = p2;
               p2 = p2.next;
               count++;
               n = n.next;
          }
          // if (!prev) {
          //      main = temp;
          //      node.head = temp;
          // }
          prev = temp;
          p2 = temp;
          console.log("count outter:> ", count, " || p1.value:> ", p1.value, " || p2.value:> ", p2.value, " || temp.value:> ", temp.value, " || p1.next.value:> ", p1.next.value);
          // break;
          if (count > 3) {
               let flag = 1;
               while (flag < 4) {
                    console.log("prev:> ", prev.value, " || p1:> ", p1.value, " || temp:> ", temp.value);
                    temp = p1;
                    p1 = p1.next;
                    temp.next = prev ? prev : p2;
                    prev = temp;
                    flag++;
               }
               console.log("temp : value :> ", temp.value); 
          }
          temp.next = n;
          break;
     }
     console.log("reverse List by K group:> ", n);

*/