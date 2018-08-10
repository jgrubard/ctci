const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
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

  closeCircle() {
    let head = this.head;
    while(head.next) {
      head = head.next;
    }
    head.next = this.head;
  }

  checkCircle() {
    let head = this.head;
    const hash = {};
    while(head.next) {
      if(!hash[head.value]) {
        hash[head.value] = head;
      } else {
        console.log('LOOPED');
        console.log(head);
        return;
      }
      head = head.next;
    }
    console.log('LINEAR');
    return;
  }

}

const list = new LinkedList();
list.insert(0);
list.insert(1);
list.insert(2);
list.closeCircle();
list.checkCircle();

// console.log(list);

// console.log(util.inspect(list, { depth: null }));