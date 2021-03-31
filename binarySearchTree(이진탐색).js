class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class InsertNode {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new TreeNode(data);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (current) {
      if (current.data === data) return this;

      if (current.data < data) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }

      if (current.data > data) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }
}

const node = new InsertNode();
node.insert(10).insert(12).insert(7).insert(9).insert(11);
console.log(node);
