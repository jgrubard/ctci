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

  partition(num) {
    let left;
    let right;
    let currLeft = null;
    let currRight = null;

    let node = this.head;
    while(node) {
      if(node.value < num) {
        if(!currLeft) {
          left = node;
          currLeft = left;
        } else {
          currLeft.next = node;
          currLeft = currLeft.next;
        }
      } else {
        if(!currRight) {
          right = node;
          currRight = right;
        } else {
          currRight.next = node;
          currRight = currRight.next;
        }
      }
      node = node.next;
    }
    currRight.next = null;
    currLeft.next = right;
    return left; 
  }
}


const list = new LinkedList();
const values = [3, 5, 8, 5, 10, 2, 1 ]; 
// const values = [8, 4, 6, 2, 1, 7, 9, 3, 5];

values.forEach(value => {
  list.insert(value);
})
list.partition(5); // 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// console.log(util.inspect(list, {showHidden: false, depth: null}));

function printListAsArray(linkedList) {
  const result = [];
  let head = linkedList.head;
  while(head) {
    result.push(head.value);
    head = head.next;
  }
  return result;
}

console.log(printListAsArray(list));





// const util = require('util');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     const node = new Node(value);
//     if(!this.head) {
//       this.head = node;
//     } else {
//       let head = this.head;
//       while(head.next) {
//         head = head.next;
//       }
//       head.next = node;
//     }
//   }

//   partition(num) {
//     let left;
//     let right;
//     let currLeft = null;
//     let currRight = null;

//     let node = this.head;
//     while(node) {
//       if(node.value < num) {
//         if(!currLeft) {
//           left = node;
//           currLeft = left;
//         } else {
//           currLeft.next = node;
//           currLeft = currLeft.next;
//         }
//       } else {
//         if(!currRight) {
//           right = node;
//           currRight = right;
//         } else {
//           currRight.next = node;
//           currRight = currRight.next;
//         }
//       }
//       node = node.next;
//     }
//     currRight.next = null;
//     currLeft.next = right;
//     return left; 
//   }
// }


// const list = new LinkedList();
// // const values = [3, 5, 8, 5, 10, 2, 1 ]; 
// const values = [8, 4, 6, 2, 1, 7, 9, 3, 5];

// values.forEach(value => {
//   list.insert(value);
// })
// list.partition(5); // 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// // console.log(util.inspect(list, {showHidden: false, depth: null}));

// function printListAsArray(linkedList) {
//   const result = [];
//   let head = linkedList.head;
//   while(head) {
//     result.push(head.value);
//     head = head.next;
//   }
//   return result;
// }

// console.log(printListAsArray(list));


// const util = require('util');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     const node = new Node(value);
//     if(!this.head) {
//       this.head = node;
//     } else {
//       let head = this.head;
//       while(head.next) {
//         head = head.next;
//       }
//       head.next = node;
//     }
//   }

//   partition(num) {
//     let min = this.head;
//     let max = this.head;
//     let left = new LinkedList();
//     let right = new LinkedList();
//     while(min.next) {
//       if(min.next.value < num) {
//         left.insert(min.next.value)
//       }
//       min = min.next;
//     }
//     while(max.next) {
//       if(max.next.value >= num) {
//         right.insert(max.next.value)
//       }
//       max = max.next;
//     }
//     let partOne = left.head;
//     while(partOne.next) {
//       partOne = partOne.next
//     }
//     partOne.next = right.head;
//     console.log(util.inspect(left, {showHidden: false, depth: null}));
//     return left;
//   }
// }

// const list = new LinkedList();
// const values = [3, 5, 8, 5, 10, 2, 1 ]; 

// values.forEach(value => {
//   list.insert(value);
// })
// list.partition(5); // 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// list.insert(0);
// list.insert(1);
// list.insert(4);
// list.insert(2);
// list.insert(6);
// list.insert(3);
// list.insert(5);
// list.partition(4);

// console.log(list);
// console.log(util.inspect(list, {showHidden: false, depth: null}));