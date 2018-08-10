function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

LinkedList.prototype.addToHead = function(value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    this.head.prev = null;
    this.tail = this.head;
  } else {
    let store = this.head;
    this.head = node;
    this.head.next = store;
  }
}

LinkedList.prototype.addToTail = function(value) {
  let node = new Node(value);
  if(!this.tail) {
    this.head = node;
    this.tail = this.head;
  } else {
    let store = this.tail;
    
  }
}

const list = new LinkedList();

list.addToHead(5);
list.addToHead(4);
list.addToHead(3);
console.log(list);

