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
      // this.nodes[node2][node1] = true;
    } else {
      console.log('You must use 2 vertices that exist!')
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
    
    // console.log(Object.keys(this.nodes[node]));
    // console.log(node)
    while(queue.length > 0) {
      let node = queue[0];
      if(this.nodes[node]) {
        Object.keys(this.nodes[node]).forEach(node => {
          queue.push(node);
          if(node === node2) {
            console.log(true);
            return;
          }
        });
      }
      let finalNode = queue.shift();
      final.push(finalNode);
    }
    console.log(final)
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
graph.checkRoute('B', 'D'); // true
// graph.checkRoute('D', 'B'); // false

console.log(graph)