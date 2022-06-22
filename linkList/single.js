class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.bottom = null;
    }
}

class SigleLinkedList {
    
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertBottom (n, value) {
        // let p = n;
        // console.log("n:>", n, " || value:> ", value);
        while (n != null && n.next != null) {
            n = n.next;
        }
        
        while (n != null && n.bottom != null) {
            // console.log("n bottom:> ", n.bottom,  "n value:> ", n.value);
            n = n.bottom;
        }
        // console.log("n bot value:>", n.value);
        n.bottom = new Node(value);
        // console.log("check Null of n:> ", n);
    }

    push (value) {
        
        let newNode = new Node(value);
        if (!this.head) {
            this.head =  newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (!this.head)
            return undefined;
        
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length == 0) {
            this.tail = null;
            this.head = null;
        }

        return current;
    }

    pushAtHead (value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
     
    shift () { 
        if (!this.head)
            return undefined;

        this.head = this.head.next;
        this.length--;

        if (this.length == 0)
            this.tail = null;
        
        return this;
    }

    getSpecificIndex (index) {
        if (index < 0 || index >= this.length)
            return null;
        
        let count = 0;
        let current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;

    }

    setValue (index, value) {
        let fatchSetIndex = this.getSpecificIndex(index);
        if (fatchSetIndex) {
            fatchSetIndex.value = value;
            return this;
        } else {
            return undefined;
        }
    }

    insertAt (index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length)
            return !!this.push(value);
        else if (index === 0)
            return !!this.pushAtHead(value);
        else {
            let newNode = new Node(value);
            let prevNode = this.getSpecificIndex(index - 1);
            let prevNext = prevNode.next;
            prevNode.next = newNode;
            newNode.next = prevNext;
            this.length++;
            return true;
        } 
    }

    removeAt (index) {
        if (index < 0 || index > this.length)
            return undefined;
        else if (index === 0)
            return this.shift();
        else if (index === (this.length -1))
            return this.pop();
        else {
            let prevNode = this.getSpecificIndex(index - 1);
            let currentNode = prevNode.next;
            prevNode.next = currentNode.next;
            this.length--;
            return currentNode;
        }
    }

    traverseInArray () {
        let nodeArr = [];
        let current = this.head;

        while (current) {
            nodeArr.push(current.value);
            current.next;
        }
        return nodeArr;
    }

    // rev

    traverse () {
        let current = this.head;
        let print = '';
        while(current) {
            // console.log(current.value);
            print += " "+ current.value;
            current = current.next;
        }
        console.log(print);
    }

    traverseWithHead(head) {
        let curr = head;
        let str = "";
        while(curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    emptyLinkedList () { // delete linked list
        this.head = undefined;
        return this;
    }
 }

//  const myList = new SigleLinkedList();

//  myList.push('Hello');
//  myList.push('Last');
//  myList.push('World');
//  myList.push('World1');
//  myList.push('World2');
//  myList.pushAtHead('World');
//  console.log(myList);
//  myList.traverse();
//  console.log("-------------------------------------");
//  myList.removeAt(1);
//  console.log("-------------------------------------");
//  myList.traverse();

//  console.log("Before InsertAt", myList);
//  myList.insertAt(2, 'Mehul');
//  console.log(myList.setValue(2, 'Changed'));
//  myList.shift();
//  console.log("After InsertAt", myList);


module.exports = SigleLinkedList;