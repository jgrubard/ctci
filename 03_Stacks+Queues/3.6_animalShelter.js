const util = require('util');

class Node {
  constructor(name, type, ticket) {
    this.name = name;
    this.type = type;
    this.ticket = ticket;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(name, type, ticket) {
    const node = new Node(name, type, ticket);
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

  dequeue() {
    // let head = this.head;
    if(this.head) {
      this.head = this.head.next;
    }
    // while(head.next.next) {
      // head = head.next;
    // }
    // head.next = null;
    
  }
}

class AnimalQueue {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
    this.ticket = 0;
  }

  enqueue(name, type) {
    if(type === 'dog') {
      this.dogs.enqueue(name, type, this.ticket);
    } else if(type === 'cat'){
      this.cats.enqueue(name, type, this.ticket);
    }
    this.ticket++;  
  }

  dequeueAny() {
    let dogHead = this.dogs.head;
    let catHead = this.cats.head;
    if(!dogHead && !catHead) {
      console.log('The Animal Shelter is Empty!');
      return;
    }
    if(!dogHead) {
      this.cats.dequeue();
      return;
    }
    if(!catHead) {
      this.dogs.dequeue();
      return;
    }
    if(dogHead.ticket < catHead.ticket) {
      this.dogs.dequeue();
    } else if(catHead.ticket < dogHead.ticket){
      this.cats.dequeue();
    }
  }

  dequeueDog() {
    this.dogs.dequeue();
  }

  dequeueCat() {
    this.cats.dequeue();
  }

}

const animalQueue = new AnimalQueue();
animalQueue.enqueue('Millie', 'dog');
animalQueue.enqueue('Samson', 'cat');
animalQueue.enqueue('Toucay', 'dog');
animalQueue.enqueue('Uno', 'cat');
animalQueue.dequeueDog();
animalQueue.dequeueDog();
animalQueue.dequeueDog();
// animalQueue.dequeueAny();
// animalQueue.dequeueAny();
// animalQueue.dequeueAny();
// animalQueue.dequeueAny();


console.log(util.inspect(animalQueue, { depth: null }));






// const util = require('util');

// class Node {
//   constructor(name, type, ticket) {
//     this.name = name;
//     this.type = type;
//     this.ticket = ticket;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//   }

//   enqueue(name, type) {
//     const node = new Node(name, type);
//     if(!this.head) {
//       this.head = node;
//     } else {
//       const head = this.head;
//       this.head = node;
//       this.head.next = head;
//     }
//   }

//   dequeue() {
//     let head = this.head;
//     if(!head.next) {
//       this.head = null;
//       return;
//     }
//     while(head.next.next) {
//       head = head.next;
//     }
//     head.next = null;
//   }
// }

// class AnimalQueue {
//   constructor() {
//     this.dogs = new Queue();
//     this.cats = new Queue();
//     this.ticket = 0;
//   }

//   enqueue(name, type) {
//     const node = new Node(name, type, this.ticket);
//     this.ticket++;
//     if(type === 'dog') {
//       if(!this.dogs.head) {
//         this.dogs.head = node;
//       } else {
//         let head = this.dogs.head;
//         while(head.next) {
//           head = head.next;
//         }
//         head.next = node;
//       }
//     } else if(type === 'cat'){
//       if(!this.cats.head) {
//         this.cats.head = node;
//       } else {
//         let head = this.cats.head;
//         while(head.next) {
//           head = head.next;
//         }
//         head.next = node;
//       }
//     }  
//   }

//   // dequeueAny() {
//   //   let dogHead = this.dogs.head;
//   //   let catHead = this.cats.head;
//   //   // console.log(dogHead, catHead)
//   //   if(catHead === null || dogHead.ticket < catHead.ticket) {
//   //     this.dogs.head = this.dogs.head.next;
//   //   } else if(!dogHead || catHead.ticket < dogHead.ticket){
//   //     this.cats.head = this.cats.head.next;
//   //   }
//   // }
// }

// const animalQueue = new AnimalQueue();
// // animalQueue.enqueue('Millie', 'dog');
// // animalQueue.enqueue('Samson', 'cat');
// // animalQueue.enqueue('Toucay', 'dog');
// // animalQueue.enqueue('Uno', 'cat');
// // animalQueue.dequeueAny();
// // animalQueue.dequeueAny();
// // animalQueue.dequeueAny();
// // animalQueue.dequeueAny();


// console.log(util.inspect(animalQueue, { depth: null }));






// const util = require('util');

// class Node {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//   }

//   enqueue(name, type) {
//     const node = new Node(name, type);
//     if(!this.head) {
//       this.head = node;
//     } else {
//       const head = this.head;
//       this.head = node;
//       this.head.next = head;
//     }
//   }

//   dequeueAny() {
//     let head = this.head;
//     if(!head.next) {
//       this.head = null;
//       return;
//     }
//     while(head.next.next) {
//       head = head.next;
//     }
//     head.next = null;
//   }

//   dequeueCat() {
//     console.log('cat');
//   }
// }

// const queue = new Queue();
// queue.enqueue('Millie', 'dog');
// queue.enqueue('Toucay', 'dog');
// queue.enqueue('Samson', 'cat');
// queue.enqueue('Uno', 'cat');
// // queue.dequeueAny();
// // queue.dequeueAny();
// // queue.dequeueAny();
// // queue.dequeueAny();
// queue.dequeueCat();

// console.log(util.inspect(queue, { depth: null }));
