class treeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class insertNode {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new treeNode(data);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (current) {
      if (data === current.data) return;

      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }

      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
}

let nums = new insertNode();
console.log(nums);
nums.insert(10);
console.log(nums);
nums.insert(5);
console.log(nums);
nums.insert(7);
console.log(nums);
