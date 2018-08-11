const Graph = require('./4.0b_graphPractice');

function checkRoute(node1, node2, graph) {
  let list = [node1];
  let node;
  while(list.length > 0) {
    node = list[0];
    let nodeArr = Object.keys(graph.nodes[node])
    for(let i = 0; i < nodeArr.length; i++) {
      const nextNode = nodeArr[i];
      if(nextNode !== node1) {
        console.log(nextNode, node2)
        list.push(nextNode);
        if(nextNode === node2) {
          return true;
        }
      }
    }
    list.shift();
  }
  return false;
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

console.log(checkRoute('B', 'D', graph)); // true
// console.log(checkRoute('D', 'B', graph)); // false