class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value)
    if(!this.head) {
      this.head = node; 
    } else {
      let head = this.head;
      while(head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }

  remove() {
    if(!this.head) {
      console.log('The Queue is already Empty');
    } else {
      this.head = this.head.next;
    }
  }
}

const queue = new Queue();
queue.add(0);
queue.add(1);
queue.add(2);
queue.remove();

console.log(queue);