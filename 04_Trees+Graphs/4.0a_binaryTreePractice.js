const util = require('util');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const node = new BST(value);
    if(value < this.value) {
      if(!this.left) {
        this.left = node;
      } else {
        this.left.insert(value);
      }
    } else {
      if(!this.right) {
        this.right = node;
      } else {
        this.right.insert(value);
      }
    }
  }

  depthFirstSearch(result, type) {
    if(type === 'pre-order') result.push(this.value);
    if(this.left) this.left.depthFirstSearch(result, type);
    if(type === 'in-order') result.push(this.value);
    if(this.right) this.right.depthFirstSearch(result, type);
    if(type === 'post-order') result.push(this.value);
    console.log(result);
  }

  breadthFirstSearch() {
    let result = [];
    if(!this) {
      return;
    }
    let list = [this]; // the first (main node)
    while(list.length > 0) {
      let tree = list[0];
      if(tree.left) list.push(tree.left);
      if(tree.right) list.push(tree.right);
      const node = list.shift();
      result.push(node);
    }
    const resultValues = result.map(item => item.value);
    console.log(resultValues);
  }

}

const tree = new BST(20);
tree.insert(16);
tree.insert(25);
tree.insert(18);
tree.insert(22);
tree.insert(26);
// tree.depthFirstSearch([], 'pre-order'); // [20, 16, 18, 25, 22, 26]
// tree.depthFirstSearch([], 'in-order'); // [16, 18, 20, 22, 25, 26]
// tree.depthFirstSearch([], 'post-order'); // [18, 16, 22, 26, 25, 20]
tree.breadthFirstSearch(); // [20, 16, 25, 18, 22, 26]

// console.log(util.inspect(tree, { depth: null }));