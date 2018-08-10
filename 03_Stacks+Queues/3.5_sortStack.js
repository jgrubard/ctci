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
      console.log('Error: Your stack is already Empty!');
      return;
    } else {
      this.head = this.head.next;
    }
  }

  peek() {
    console.log('stack.peek():', this.head)
    return this.head;
  }

  isEmpty() {
    console.log('stack.isEmpty():', this.head === null);
    return this.head === null;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(1);
stack.push(2);
stack.push(8);
stack.push(9);
stack.push(3);

function stackSort(inputStack) {
  let tempStack = new Stack();
  let tempValue;
  while(inputStack.head) {
    tempValue = inputStack.head.value;
    inputStack.pop();
    while(tempStack.head && tempStack.head.value > tempValue) {
      inputStack.push(tempStack.head.value);
      tempStack.pop();
    }
    tempStack.push(tempValue);
  }
  while(tempStack.head) {
    inputStack.push(tempStack.head.value);
    tempStack.pop();
  }
  return inputStack;
}

const finalStack = stackSort(stack);

console.log(util.inspect(finalStack, { depth: null }));
