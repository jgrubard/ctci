const util = require('util')

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
      while(head) {
        if(!head.next) {
          return head.next = node;
        } else {
          head = head.next;
        }
      }
    }
  }

  removeDupes() {
    let head = this.head;
    const map = {};
    map[head.value] = true;
    while(head.next) {
      if(!map[head.next.value]) {
        map[head.next.value] = true;
        head = head.next;
      } else {
        head.next = head.next.next;
      }        
    }
    console.log(util.inspect(this, {showHidden: false, depth: null}))
  }
}

const list = new LinkedList();

list.insert('1');
list.insert('2');
// list.insert('2');
// list.insert('2');
// list.insert('2');
// list.insert('2');
list.insert('3');
list.insert('2');
list.insert('1');
list.insert('4');
list.removeDupes();
// console.log(util.inspect(list, {showHidden: false, depth: null}))


//---------------------------------------------

// function removeDupes(linkedList) {
//   // console.log(linkedList)
//   let head = linkedList;
//   const map = {};
//   map[head.value] = true;

//   // console.log(util.inspect(head, {showHidden: false, depth: null}))

//   while(head.next) {
//     // console.log(map);
//     if(!map[head.next.value]) {
//       map[head.next.value] = true;
//     } else {
//       // console.log(head.next.value)
//       head.next = head.next.next;
//     }
//     head = head.next;
//   }
//   // console.log(util.inspect(list, {showHidden: false, depth: null}))
// }

// function printNodeValues(head) {
//   while(head) {
//     // console.log(head.value);
//     head = head.next;
//   }
// }

// console.log(removeDupes(list))
// console.log(printNodeValues(list))


// const node1 = new LinkedList('1');
// const node2 = new LinkedList('2');
// const node3 = new LinkedList('3');
// const node4 = new LinkedList('2');
// const node5 = new LinkedList('1');
// const node6 = new LinkedList('4');

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;

// function removeDupes(list) {
//   let head = list;
//   const map = {};
//   map[head.value] = true;
//   while(head.next) {
//     // console.log(map);
//     if(!map[head.next.value]) {
//       map[head.next.value] = true;
//     } else {
//       // console.log(head.next.value)
//       head.next = head.next.next;
//     }
//     head = head.next;
//   }
//   // console.log(util.inspect(list, {showHidden: false, depth: null}))
// }

// function printNodeValues(head) {
//   while(head) {
//     console.log(head.value);
//     head = head.next;
//   }
// }

// console.log(removeDupes(node1))
// console.log(printNodeValues(node1))






// // console.log(node1)

// function removeDupes(head) {
//   const map = {};
//   // console.log(head.value);
//   while(head) {
//     // console.log(head);
//     console.log(head.value)
//     if(map[head.value] === undefined) {
//       map[head.value] = 1;
//     } else {
//       // map[head.value]++;
//     }
//     if(head.next) {
//       // console.log(head.next.value)
      
//       if(map[head.next.value]) {
//         head = head.next.next
//       } else {
//         head = head.next;
//       }
//     } else {
//       head = null;
//     }
    

//   }
//   console.log(map);
// }

// function printList(head) {
//   // console.log(head);
//   while(head) {
//     console.log(head.value);
//     head = head.next;
//   }
// }

// console.log(removeDupes(node1))
// // console.log(printList(node1));









// function checkDupe(head, node) {
//   while(head.next) {
//     if(head.value === node.value) {
//       return true;
//     }
//     head = head.next; 
//   }
//   return false;
// }

// function removeDupes(head) {
//   // checkDupe(head, node);
//   console.log(head);

// }

// console.log(removeDupes(node1));



// function removeDupes
