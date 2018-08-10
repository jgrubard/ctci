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
}

const list1 = new LinkedList();
const list2 = new LinkedList();
const list3 = new LinkedList();

const values1 = [0, 1, 2];
const values2 = [3, 4, 5, 6, 7, 0];
const values3 = [7, 8, 9];

values1.forEach(value => {
  list1.insert(value);
});

values2.forEach(value => {
  list2.insert(value);
});

values3.forEach(value => {
  list3.insert(value);
});

let head1 = list1.head;
let head2 = list2.head;
let head3 = list3.head;

while(head1.next) {
  head1 = head1.next;
}
head1.next = list3.head;

while(head2.next) {
  head2 = head2.next;
}
head2.next = list3.head;

function checkIntersection(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;
  while(head1 || head2) {
    if(!head1.next) {
      head1 = list1.head;
      head2 = head2.next;
    }
    if(!head2.next) {
      return 'There is no intersection between the Linked Lists';
    }
    if(head1 === head2) {
      return head1;
    }
    head1 = head1.next;
  }
}

console.log(checkIntersection(list1, list2));

// console.log('LIST-1', util.inspect(list1, {showHidden: false, depth: null}));
// console.log('LIST-2', util.inspect(list2, {showHidden: false, depth: null}));
