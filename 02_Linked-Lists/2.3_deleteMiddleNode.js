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

  deleteMiddleNode() {
    let head = this.head;
    let count = 0;
    // console.log(util.inspect(head, {showHidden: false, depth: null}));
    while(head) {
      head = head.next;
      count++;
    }
    head = this.head;
    // console.log(util.inspect(head, {showHidden: false, depth: null}));
    const toRemove = Math.floor(count/2);
    count = 1;
    // // console.log(count);
    while(count < toRemove) {
      head = head.next;
      count++;
    }
    head.next = head.next.next
    // console.log(util.inspect(head, {showHidden: false, depth: null}));
  }
}

const list = new LinkedList();

list.insert(0);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
list.deleteMiddleNode();

console.log(util.inspect(list, {showHidden: false, depth: null}));