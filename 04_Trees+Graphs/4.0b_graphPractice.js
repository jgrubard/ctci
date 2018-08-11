class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    if(this.nodes[node] === undefined) {
      this.nodes[node] = {};
    } else {
      console.log('This Node already exists!')
    }
  }

  createEdge(node1, node2) {
    let value1 = this.nodes[node1] !== undefined;
    let value2 = this.nodes[node2] !== undefined;
    if(value1 && value2) {
      this.nodes[node1][node2] = true;
      // this.nodes[node2][node1] = true; // remove if we are only moving in one direction
    } else {
      console.log('You must use 2 vertices that exist!');
    }
  }

  checkConnection(node1, node2) {
    if(this.nodes[node1][node2]) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }

  checkRoute(node1, node2) {
    let final = [];
    let queue = [node1];
    while(queue.length > 0) {
      let node = queue[0];
      if(this.nodes[node]) {
        let nodeArray = Object.keys(this.nodes[node]);
        nodeArray.forEach(nextNode => {
          console.log('nextNode:', nextNode);
          if(nextNode !== node1) {
            queue.push(nextNode); // infinte loop
            console.log('node pair:', node, nextNode);
            if(nextNode === node2) {
              // console.log(true);
              return true;
            }
          }
        });
      }
      queue.shift();
      // let finalNode = queue.shift();
      // console.log('finalNode:', finalNode)
      // final.push(finalNode);
      // console.log('queue.length:', queue.length)
    }
    // if(final.includes(node2)) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
    // console.log(false);
    return false;
    // console.log('final:', final);
  }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.createEdge('A', 'B');
graph.createEdge('A', 'D');
graph.createEdge('C', 'A');
graph.createEdge('B', 'C');
// graph.checkConnection('A', 'B'); // true
// graph.checkConnection('D', 'B'); // false
console.log(graph.checkRoute('B', 'D')); // true
// console.log(graph.checkRoute('D', 'B')); // false

// console.log(graph)



















// class Graph {
//   constructor() {
//     this.nodes = {};
//   }

//   addNode(node) {
//     if(this.nodes[node] === undefined) {
//       this.nodes[node] = {};
//     } else {
//       console.log('This Node already exists!')
//     }
//   }

//   createEdge(node1, node2) {
//     let value1 = this.nodes[node1] !== undefined;
//     let value2 = this.nodes[node2] !== undefined;
//     if(value1 && value2) {
//       this.nodes[node1][node2] = true;
//       // this.nodes[node2][node1] = true; // remove if we are only moving in one direction
//     } else {
//       console.log('You must use 2 vertices that exist!');
//     }
//   }

//   checkConnection(node1, node2) {
//     if(this.nodes[node1][node2]) {
//       console.log(true);
//       return true;
//     }
//     console.log(false);
//     return false;
//   }

//   checkRoute(node1, node2) {
//     let final = [];
//     let queue = [node1];
//     while(queue.length > 0) {
//       let node = queue[0];
//       if(this.nodes[node]) {
//         let nodeArray = Object.keys(this.nodes[node]);
//         nodeArray.forEach(nextNode => {
//           if(nextNode !== node1) {
//             queue.push(nextNode); // infinte loop
//           }
//           console.log('node pair:', node, nextNode);
//           // if(nextNode === node2) {
//             // console.log(true);
//             // return true;
//           // }
//         });
//       }
//       // queue.shift();
//       let finalNode = queue.shift();
//       // console.log('finalNode:', finalNode)
//       final.push(finalNode);
//       // console.log('queue.length:', queue.length)
//     }
//     if(final.includes(node2)) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//     // console.log(false);
//     // return false;
//     // console.log('final:', final);
//   }
// }

// const graph = new Graph();
// graph.addNode('A');
// graph.addNode('B');
// graph.addNode('C');
// graph.addNode('D');
// graph.createEdge('A', 'B');
// graph.createEdge('A', 'D');
// graph.createEdge('C', 'A');
// graph.createEdge('B', 'C');
// // graph.checkConnection('A', 'B'); // true
// // graph.checkConnection('D', 'B'); // false
// // graph.checkRoute('B', 'D'); // true
// // graph.checkRoute('D', 'B'); // false

// console.log(graph)