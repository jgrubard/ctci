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
      console.log('Your stack is empty');
      return;
    } else {
      this.head = this.head.next;
    }
  }

  peek() {
    // console.log(this.head)
    return this.head;
  }

  isEmpty() {
    // console.log(this.head === null);
    return this.head === null;
  }
}

class StackQueue {
  constructor() {
    this.input = new Stack();
    this.output = new Stack();
  }

  enqueue(value) {
    this.input.push(value);
  }

  dequeue() {
      let head = this.input.head;
      while(head) {
        const current = this.input.peek().value;
        this.input.pop();
        this.output.push(current);
        head = head.next;
      }
      if(this.output.isEmpty()){
        console.log('Your Queue is empty');
        return;
      }
      const toReturn = this.output.head;
      this.output.pop();
      console.log('PEEK:', toReturn.value);
      return toReturn.value;
  }
}

const queue = new StackQueue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(util.inspect(queue, { depth: null }));




// const stack = new Stack();

// stack.push(0);
// stack.push(1);
// stack.push(2);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.peek();
// stack.isEmpty();

// console.log(util.inspect(stack, { depth: null }));