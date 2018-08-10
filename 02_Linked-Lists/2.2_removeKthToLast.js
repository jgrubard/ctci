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

  removeKthToLast(k) {
    let head = this.head;
    let first = this.head;
    let second = this.head;
    let count = 0;
    while(count < k) {
      second = second.next;
      count++;
    }
    while(second.next) {
      second = second.next;
      first = first.next;
    }
    first.next = first.next.next;
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
list.removeKthToLast(4);

console.log(util.inspect(list, {showHidden: false, depth: null}));