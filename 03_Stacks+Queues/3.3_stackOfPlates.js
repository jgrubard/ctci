const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(value) {
    const node = new Node(value);
    if(!this.head) {
      this.head = node;
    } else {
      const head = this.head;
      this.head = node;
      this.head.next = head;
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
}

class SetOfStacks {
  constructor(limit) {
    this.stackArray = [];
    this.limit = limit;
    this.stackCount = 0;
  }

  push(value) {
    if(this.stackCount === 0 || this.stackArray[this.stackCount - 1].count === this.limit) {
      this.stackCount++;
      const subStack = new Stack();
      this.stackArray[this.stackCount - 1] = subStack;
      subStack.push(value);
      subStack.count++;
    } else {
      const subStack = this.stackArray[this.stackCount - 1];
      subStack.push(value);
      subStack.count++;
    }
  }

  pop() {
    if(this.stackCount === 0) {
      console.log('Your Stack is Empty!')
      return;
    }
    let lastStack = this.stackArray[this.stackCount - 1];
    if(!lastStack.head.next) {
      this.stackArray = this.stackArray.filter(item => item !== lastStack);
      this.stackCount--;
    } else {
      lastStack.pop();
      lastStack.count--;
    }
  }
}

const stack = new SetOfStacks(3);
stack.push(0);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();

console.log(util.inspect(stack, { depth: null }))