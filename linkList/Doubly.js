class Doubly {
     constructor (value) {
          this.value = value;
          this.next = null;
          this.prev = null;
     }
}

class DoublyImplementation {
     constructor () {
          // this.cap = capacity;
          this.head = null;
          this.tail = null;
          this.len = 0;
     }

     push (value) {
          let node = new Doubly(value);
          if (!this.head)
               this.head = node;
          else {
               let cur = this.head;
               let prev;
               while (cur.next != null) {
                    prev = cur;
                    cur = cur.next;
               }
               cur.next = node;
               node.prev = cur;
          }
          this.len++;
          this.tail = node;
     }

     pop () {
          if (!this.head)
               return console.log("Your list is empty!");
          if(this.len == 1) {
               this.len--;
               return this.head = null;
          }
          let cur = this.head;
          let prev = null;
          while (cur.next != null) {
               prev = cur;
               cur = cur.next;
          }
          this.tail = prev;
          prev.next = null;
          this.len--;
     }

     printList () {
          let cur = this.head;
          let list = '';
          while (cur != null) {
               list += ' ' + cur.value;
               cur = cur.next;
          }
          console.log(list);
     }

     pushAtHead (value) {
          if(!this.head)
               return console.log("Your list is empty!");
          let node = new Doubly(value);
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
          this.len++;
     }

     size () {
          return console.log(this.len);
     }

     popAtHead () {
          if (!this.head)
               return console.log("Your list is empty!");
          this.head.next.prev = null;
          this.head = this.head.next;
          this.len--;
     }

     pushAtIndex (index, value) {
          if (index < 0 || index > this.len)
               return console.log("Index not present in list!");
          let [count, cur] = [1, this.head];
          
          while (cur.next != null) {
               if (count == index - 1) {
                    let node = new Doubly(value);
                    let prevNext = cur;
                    let next = cur.next;
                    prevNext.next = node;
                    node.prev = prevNext;
                    node.next = next;
                    next.prev = node;
                    this.len++;
               }
               cur = cur.next;
               count++;
          }
     }

     popAtIndex (index) {
          if (index < 0 || index > this.len)
               return console.log("Index not present in list!");
          let [count, cur] = [1, this.head];

          while (cur.next != null) {
               if (count == index - 1) {
                    cur.next = cur.next.next;
                    cur.next.next.prev = cur;
                    this.len--;
               }
               cur = cur.next;
               count++;
          }
          
     }

     getSpecificIndex (index) {
          if (index < 0 || index > this.len)
               return console.log("Given index is not present!");
          let [count, cur] = [1, this.head];
          while (cur != null) {
               if (index == count)
                    return cur;
               cur = cur.next;
               count++;
          }
     }

     printList (node) {
          let cur = node.head;
          let str = '';
          while (cur != node.tail) {
               console.log(cur);
               str += cur.value + ' -> ';
               cur = cur.prev;
          }
          console.log(str);
     }
     
     // pushAfterHead = (value) => {
     //      if (!this.head)
     //           return console.log("Your list is empty!");
     //      let node = new Doubly(value);
     //      let temp = this.head.next;
     //      this.head.next = node;
     //      node.prev = this.head;
     //      temp.prev = node;

     // }
}



module.exports = DoublyImplementation;
