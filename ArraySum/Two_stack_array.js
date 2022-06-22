// Implement two stacks in an array

function push1 (value) { // stack 1
     if (first < last - 1) {
          first++;
          arr[first] = value;
          return arr;
     }
     return "Oops stack-1 overflow!";
}

function push2 (value) { // stack 2
     if (first < last - 1) {
          last--;
          arr[last] =  value;
          return arr;
     }
     return "Oops stack-2 overflow!"
}

function pop1 () { // stack 1
     if (first >= 0) {
          let val = arr[first];
          first--;
          return val;
     }
     return "Oops stack-1 is empty!"
}

function pop2 () { // stack 2
     if (last < len) {
          let val = arr[last];
          last++;
          return val;
     }
     return "Oops stack-2 is empty!";
}

let len = 10;
let first = -1;
let last = len;
let arr = Array(len);

console.log(push1(1));
console.log(push1(1));
console.log(push2(2));
console.log(push1(3));
console.log(pop2());
console.log(pop2());


//  node Two_stack_array.js