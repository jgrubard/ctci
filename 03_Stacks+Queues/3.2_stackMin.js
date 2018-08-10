const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.min = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
      node.min = value;
    } else {
      let head = this.head;
      this.head = node;
      this.head.next = head;
      if(value < head.min) {
        this.head.min = value;
      } else {
        this.head.min = head.min;
      }
    }
  }

  pop() {
    if(!this.head) {
      console.log('The stack is already empty');
      return;
    } else {
      this.head = this.head.next;
    }
  }

  min() {
    console.log(this.head.min)
    return;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(2);
stack.pop();
stack.min();


console.log(util.inspect(stack, { depth: null }))