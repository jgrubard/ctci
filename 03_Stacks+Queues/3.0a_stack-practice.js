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
      let head = this.head;
      this.head = node;
      node.next = head;
    }
  }

  pop() {
    if(!this.head) {
      console.log('The stack is already empty');
      return;
    } else if (!this.head.next){
      this.head = null;
    } else {
      this.head = this.head.next;
    }
  }

  peek() {
    console.log(this.head);
    return;
  }

  isEmpty() {
    console.log(!this.head);
    return;
    // if(!this.head) {
    //   console.log(true)
    //   return;
    // }
    // console.log(false)
    // return;
  }
}

const stack = new Stack();
// stack.isEmpty();
// stack.push(0);
// stack.isEmpty();
// stack.push(1);
// stack.push(2);
// stack.pop();
stack.isEmpty();
stack.peek();

console.log(stack);